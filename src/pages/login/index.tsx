import React from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import I from "../../images/i.png";
import Frame from "../../images/Frame.png";
import "./styles.scss";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-form">
        <img src={I} alt="I" />
        <h1>Dispare mensagens quando e para quem você quiser.</h1>

        <div className="input email">
          <span>E-mail</span>
          <Input name="email" placeholder="Placeholder" />
        </div>

        <div className="input password">
          <span>Senha</span>
          <Input placeholder="Placeholder" icon="far fa-calendar" />
        </div>

        <Button text="Entrar" />
        <div className="no-account">
          <small>Não tem uma conta? </small>
          <small className="sign-up">Cadastre-se</small>
        </div>
        <div className="copyright">
          <span>
            Copyright © 2010-2021 - Informem-se Company S.L. All rights
            reserved.
          </span>
        </div>
      </div>
      <div className="about">
        <img src={Frame} alt="Frame" />
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          sapien mi, commodo ut pellentesque non, fermentum at risus. Sed eu
          augue sit amet leo scelerisque cursus vitae ac dolor
        </span>
      </div>
    </div>
  );
}
