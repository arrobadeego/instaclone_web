import React, { Component } from 'react';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

import './Feed.css';

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Diego Moreira</span>
                            <span className="place">Fortaleza</span>
                        </div>

                        <img src={more} alt="Mais"/>
                    </header>
                    
                    <img src="http://localhost:3333/files/golden.jpg" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="gostei"/>
                            <img src={comment} alt="comentário"/>
                            <img src={send} alt="enviar"/>
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Descrição da foto
                            <span>#golden #retriever #itimalia</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;