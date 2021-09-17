import React, { useEffect, useState } from 'react'
import styles from '../styles/RandomQuotes.module.css'
import axios from 'axios'

export default function RandomQuotes() {

    const [frases, setFrases] = useState([]);
    const [actualizar, setActualizar] = useState(false);

    useEffect(() => {
        setActualizar(false);
        getJson();
    }, [actualizar])

    const getJson = async () => {
        axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => {
                const aleatorio = Math.floor(Math.random() * (102 - 0) + 0);
                setFrases(response.data.quotes[aleatorio])
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleActualizar = () => {
        setActualizar(true);
    }

    const { quote, author } = frases

    return (<div className={styles.card}>

        <div className="card border border-info d-flex rounded-3 justify-content-center m-5 p-2">
            <div className="card-body container">
                <blockquote className="blockquote mb-0">
                    <h5 className="card-title text-primary">Random quote of the day:</h5>
                    <p className="mt-5">{quote}</p>
                    <footer className="blockquote-footer mt-2">{author}</footer>
                </blockquote>
                <span onClick={handleActualizar} className="btn btn-outline-info mt-5">New Quote</span>
            </div>
        </div>


    </div>)
}
