import React, { FormEvent, useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import I from "../../images/bluelogo.png";
import Frame from "../../images/Frame.png";
import "./styles.scss";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/actions";

export default function Login() {
  const reduxState = useSelector((state: any) => state);
  const history = useHistory();

  // if user is alredy logged
  if (reduxState.auth.data.user) history.push("/disparos");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function submitHandle(e: FormEvent) {
    e.preventDefault();

    // login user
    dispatch(login(email, password));
  }

  return (
    <div className="login-page">
      <form onSubmit={(e) => submitHandle(e)} className="login-form">
        <img src={I} alt="I" />
        <h1>Dispare mensagens quando e para quem você quiser.</h1>

        <div className="input email">
          <span>E-mail</span>
          <Input
            state={email}
            setState={setEmail}
            size="big"
            name="email"
            placeholder="Placeholder"
          />
        </div>

        <div className="input password">
          <span>Senha</span>
          <Input
            state={password}
            setState={setPassword}
            size="big"
            placeholder="Placeholder"
            icon="far fa-calendar"
            type="password"
          />
        </div>

        <Button size="big" text="Entrar" />
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
      </form>
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
