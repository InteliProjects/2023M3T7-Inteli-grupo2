import styles from './home.module.css';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
    const [items, setItems] = useState([]);
    const [inputVisibility, setInputVisibility] = useState(true);
    const [inputText, setInputText] = useState('');
    const [lines, setLines] = useState([]);
    const [client, setClient] = useState(null);
    const [edit, setEdit] = useState(false);
    const [onlyChurn, setOnlyChurn] = useState(false);
    const [modifiedValues, setModifiedValues] = useState(null);
    const [clientFeatures, setClientFeatures] = useState({});

    useEffect(() => {
    fetch('http://127.0.0.1:5000/api/items')
        .then(response => response.json())
        .then(data => setItems(data.slice(0, 4999)))
        .catch(error => console.error('Erro ao buscar itens:', error));
}, []);

    useEffect(() => {
        setLines(items);
    }, [items])

    useEffect(() => {
        if (inputText != '') {
            console.log(inputText)
            setLines(
                items?.filter(item =>
                item.id.toLowerCase().startsWith(inputText.toLowerCase())
                )
            );
        } else {
            setLines(items);
        }
    }, [inputText])

    function handleBlur() {
        if (inputText == '') {
            setInputVisibility(true)
        }
    }

    useEffect(() => {
        if (onlyChurn) {
            setLines(items.filter((item) => {
                return (item['Probabilidade Churn'] * 100) > 50
            }))
        } else {
            setLines(items)
        }
    }, [onlyChurn])

    useEffect(() => {
        if (client && edit) {
            items.map(item => {
                if (item.id == client) {
                    document.getElementById('itemNetMargin').value = item.net_margin
                    document.getElementById('itemPriceP1Var').value = item.price_p1_var
                    document.getElementById('itemPriceP1Fix').value = item.price_p1_fix
                    document.getElementById('itemNumYearsAntig').value = item.num_years_antig
                    document.getElementById('itemCons12M').value = item.cons_12m
                    document.getElementById('itemConsumption').value = item.consumption
                }
            })
        }
        return
    }, [client, edit])

    function confirmValues() {
        if (edit) {
            var values = {
                'id': document.getElementById('itemId').textContent,
                'churn': document.getElementById('itemChurn').textContent,
                'net_margin': document.getElementById('itemNetMargin').value,
                'price_p1_var': document.getElementById('itemPriceP1Var').value,
                'price_p1_fix': document.getElementById('itemPriceP1Fix').value,
                'num_years_antig': document.getElementById('itemNumYearsAntig').textContent,
                'cons_12m': document.getElementById('itemCons12M').value,
                'consumption': document.getElementById('itemConsumption').value
            }
            preverDados(values);
        }
        setEdit(false);
    }

    async function preverDados(values) {
        fetch('http://127.0.0.1:5000/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
        .then(response => response.json())
        .then(data => setModifiedValues(data))
        .catch(error => console.error('Erro:', error));
    }

    useEffect(() => {
        if (client && edit) {
            items.map(item => {
                if (item.id == client) {
                    var clientFeaturesData = {
                        'net_margin': item.net_margin,
                        'price_p1_var': item.price_p1_var,
                        'price_p1_fix': item.price_p1_fix,
                        'cons_12m': item.cons_12m,
                        'consumption': item.consumption
                    }
                    setClientFeatures(clientFeaturesData)
                }
            })
        }
    }, [client])

    useEffect(() => {
        console.log(modifiedValues)
    }, [modifiedValues])

    return (
        <div className={styles['home']}>
            <div>
                <div onBlur={() => {handleBlur()}} onFocus={() => {setInputVisibility(false)}} className={styles['input-div']}>
                    <img onClick={() => {setOnlyChurn(!onlyChurn)}} className={styles['churn-icon']} src={onlyChurn ? "./images/redChurn.png" : "./images/grayChurn.png"}/>
                    <img className={styles['search-icon']} style={inputVisibility ? {'visibility': 'visible'} : {'visibility': 'hidden'}} src="./images/search.png" alt="Lupa" />
                    <input onChange={(e) => {setInputText(e.target.value)}} type="text" />
                    <span style={inputVisibility ? {'visibility': 'visible'} : {'visibility': 'hidden'}} >Pesquisar pelo ID</span>
                </div>
                <div className={styles['table']}>
                    <div className={styles['id-column']}>
                        <h1>ID</h1>
                    </div>
                    <div className={styles['churn-column']}>
                        <h1>Churn</h1>
                    </div>
                </div>
                <div className={styles['lines']}>
                    {lines.map(item => (
                        <div onClick={() => {setClient(item.id)}} key={item.id}>
                            <p>{item.id}</p>
                            <span>{Number((item['Probabilidade Churn'] * 100).toFixed(2))}%</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className={styles['details']}>
                    <h1 className={styles['details-head']}>Detalhes</h1>
                    {client ? items.map(item => (
                        client == item.id && (
                            <div key={item.id} className={styles['details-div']}>
                                <p><span>ID:</span>
                                    <span style={{fontWeight: 400}} id='itemId'>{item.id}</span>
                                </p>
                                <p><span>Churn:</span>
                                    <span style={{fontWeight: 400, marginRight: 0}} id='itemChurn'>{Number((item['Probabilidade Churn'] * 100).toFixed(2))}</span>%
                                </p>
                                <p><span>Net_Margin:</span>$
                                    {edit ? <input id='itemNetMargin' type='number'/> : <span style={{fontWeight: 400}} id='itemNetMargin'>{item.net_margin}</span>}
                                </p>
                                <p><span>Price_P1_Var:</span>
                                    {edit ? <input id='itemPriceP1Var' type='number'/> : <span style={{fontWeight: 400}} id='itemPriceP1Var'>{item.price_p1_var}</span>} $/kWh
                                </p>
                                <p><span>Price_P1_Fix:</span>$
                                    {edit ? <input id='itemPriceP1Fix' type='number'/> : <span style={{fontWeight: 400}} id='itemPriceP1Fix'>{item.price_p1_fix}</span>}
                                </p>
                                <p><span>Num_Years_Antig:</span>
                                    <span style={{fontWeight: 400}} id='itemNumYearsAntig'>{item.num_years_antig}</span> anos 
                                </p>
                                <p><span>Cons_12M:</span>
                                    {edit ? <input id='itemCons12M' type='number'/> : <span style={{fontWeight: 400}} id='itemCons12M'>{item.cons_12m}</span>} KW
                                </p>
                                <p><span>Consumption:</span>$
                                    {edit ? <input id='itemConsumption' type='number'/> : <span style={{fontWeight: 400}} id='itemConsumption'>{item.consumption}</span>} 
                                </p>
                            </div>
                        )
                    )) : (
                            <div className={styles['details-div']}>
                                <p><span>ID:</span> - </p>
                                <p><span>Churn:</span> - </p>
                                <p><span>Net_Margin:</span> - </p>
                                <p><span>Price_P1_Var:</span> - </p>
                                <p><span>Price_P1_Fix:</span> - </p>
                                <p><span>Num_Years_Antig:</span> - </p>
                                <p><span>Cons_12M:</span> - </p>
                                <p><span>Consumption:</span> - </p>
                            </div>
                        )
                    }
                    <div className={styles['edit-icon']}><img onClick={() => {setEdit(!edit)}} src={edit ? "./images/blueEdit.png" : "./images/grayEdit.png"} alt="" /></div>
                    <img onClick={() => {confirmValues()}} className={styles['confirm-icon']} style={edit ? {top: '71px'} : {top: '46px'}} src="./images/confirm.png" />
                </div>
                {clientFeatures && modifiedValues ? <div style={modifiedValues ? {visibility: 'visible', marginTop: 10} : {visibility: 'hidden',marginTop: 10}} className={styles['details']}>
                    <h1 className={styles['details-head']}>Detalhes (MODIFICADO)</h1>
                    <div className={styles['details-div']}>
                        <p><span>ID:</span><span style={{fontWeight: 400}}>{modifiedValues?.id}</span></p>
                        <p><span>Churn:</span><span style={{color: 'green'}}>{modifiedValues?.churn * 100}%</span></p>
                        <p><span>Net_Margin:</span><span style={{fontWeight: 400}}>${modifiedValues?.net_margin}</span></p>
                        <p><span>Price_P1_Var:</span><span style={{fontWeight: 400}}>{modifiedValues?.price_p1_var} $/kWh</span></p>
                        <p><span>Price_P1_Fix:</span><span style={{fontWeight: 400}}>${modifiedValues?.price_p1_fix}</span></p>
                        <p><span>Num_Years_Antig:</span><span style={{fontWeight: 400}}>{modifiedValues?.num_years_antig} anos</span></p>
                        <p><span>Cons_12M:</span><span style={{fontWeight: 400}}>{modifiedValues?.cons_12m} KW</span></p>
                        <p><span>Consumption:</span><span style={{fontWeight: 400}}>${modifiedValues?.consumption}</span></p>
                    </div>
                </div> : null}
            </div>
        </div>
    )
}