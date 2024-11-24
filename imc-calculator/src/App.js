import React, { useState } from "react";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = parseFloat(altura) / 100; // Converter altura para metros
      const imcCalculado = (parseFloat(peso) / (alturaMetros ** 2)).toFixed(2);
      setImc(imcCalculado);

      if (imcCalculado < 18.5) {
        setClassificacao("Abaixo do peso");
      } else if (imcCalculado < 24.9) {
        setClassificacao("Peso normal");
      } else if (imcCalculado < 29.9) {
        setClassificacao("Sobrepeso");
      } else {
        setClassificacao("Obesidade");
      }
    } else {
      setImc(null);
      setClassificacao("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Calculadora de IMC</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calcularIMC();
        }}
        style={styles.form}
      >
        <label>
          Altura (cm):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 170"
            style={styles.input}
          />
        </label>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>
          Calcular IMC
        </button>
      </form>
      {imc && (
        <div style={styles.result}>
          <p>Seu IMC: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default App;
