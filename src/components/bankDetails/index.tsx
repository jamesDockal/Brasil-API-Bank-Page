import React, { useEffect, useState } from "react";
import "./styles.scss";

export default function BankDetails() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    let mess = [];
    for (let index = 0; index < 24; index++) {
      mess.push(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat pellentesque eleifend donec urna. Morbi at vulputate dictumst nullam at sit. Sed orci, pretium, dolor volutpat mattis accumsan, ornare. Ut diam sem magna ultricies. Nibh pulvinar eget risus risus, sed faucibus in in ac. Enim suspendisse id lobortis euismod fringilla odio. Non in facilisis tortor tellus fringilla in interdum. Magna volutpat justo, pharetra adipiscing mauris sagittis, pellentesque diam. Vestibulum, aenean eu consectetur rhoncus scelerisque at nisl, purus. Sapien tellus consequat ac ornare. Amet, tortor odio velit libero, commodo sagittis cras."
      );
    }
    setMessages(mess);
  }, []);

  return (
    <div className="bank-details">
      <header className="details-header">
        <h1>Detalhes do Banco</h1>
        <div className="bank-info">
          <section>
            <strong>Nome do Banco</strong>
            <span>Nome do Titulo</span>
          </section>
          <section>
            <strong>Codigo do Banco</strong>
            <span>22/03/2021</span>
          </section>
          <section>
            <strong>ISPB</strong>
            <span>08:30</span>
          </section>
        </div>
      </header>
      <main className="details-main">
        {messages.map((message, index) => (
          <section key={index}>
            <strong>Mensagem {index + 1}</strong>
            <span>{message}</span>
          </section>
        ))}
      </main>
    </div>
  );
}
