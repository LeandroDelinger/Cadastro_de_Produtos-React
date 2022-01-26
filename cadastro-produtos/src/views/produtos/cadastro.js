import React from "react";
//ProductService armazena os valores do form na localstorage do navegador
import ProductService from "../../app/productService";

const initialState = {
  nome: "",
  sku: "",
  descricao: "",
  preco: 0,
  fornecedor: "",
  success: false,
  errors: [],
};

export default class CadastroProduto extends React.Component {
  state = initialState;

  constructor() {
    super();
    this.service = new ProductService();
  }

  onChange = (event) => {
    const valor = event.target.value;
    const nomeDoCampo = event.target.name;
    this.setState({ [nomeDoCampo]: valor });
  };

  onSubmit = (event) => {
    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor,
    };
    try {
      this.service.salvar(produto);
      this.cleanField();
      this.setState({ success: true });
    } catch (erro) {
      const errors = erro.errors;
      this.setState({ errors: errors });
    }
  };

  cleanField = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">Cadastro de produto</div>
        <div className="card-body">
          {this.state.success && (
            <div class="alert alert-dismissible alert-success">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
              ></button>
              <strong>Parabéns!</strong> Cadastro realizado com sucesso! .
            </div>
          )}

          {this.state.errors.length > 0 &&
            this.state.errors.map((msg) => {
              return (
                <div class="alert alert-dismissible alert-danger">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                  ></button>
                  <strong>Ocorreu um erro!</strong> {msg}
                </div>
              );
            })}

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome: *</label>
                <input
                  type="text"
                  name="nome"
                  onChange={this.onChange}
                  value={this.state.nome}
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>SKU: *</label>
                <input
                  type="text"
                  name="sku"
                  onChange={this.onChange}
                  value={this.state.sku}
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <label>Descrição: *</label>
                <textarea
                  name="descricao"
                  onChange={this.onChange}
                  value={this.state.descricao}
                  className="form-control"
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Preço: *</label>
                  <input
                    type="text"
                    name="preco"
                    onChange={this.onChange}
                    value={this.state.preco}
                    className="form-control"
                  ></input>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Fornecedor: *</label>
                  <input
                    type="text"
                    name="fornecedor"
                    onChange={this.onChange}
                    value={this.state.fornecedor}
                    className="form-control"
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-1">
                <button onClick={this.onSubmit} className="btn btn-success">
                  Salvar
                </button>
              </div>
              <div className="col-md-1">
                <button onClick={this.cleanField} className="btn btn-primary">
                  Limpar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
