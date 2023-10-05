import React, { useState } from "react";
import { collection, addDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from '../../firebase'
import { storage } from "../../firebase";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

function ItemCadastro() {
  const [categoria, setCategoria] = useState("");
  const [produto, setProduto] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [valor, setValor] = useState("");
  const [cores, setCores] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [largura, setLargura] = useState("");
  const [altura, setAltura] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [peso, setPeso] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagens, setImagens] = useState([]);

  const handleCategoriaChange = (e) => { setCategoria(e.target.value); };
  const handleProdutoChange = (e) => { setProduto(e.target.value); };
  const handleAvaliacaoChange = (e) => { setAvaliacao(e.target.value); };
  const handleValorChange = (e) => { setValor(e.target.value); };
  const handleCoresChange = (e) => { setCores(e.target.value); };
  const handleQuantidadeChange = (e) => { setQuantidade(e.target.value); };
  const handlePesoChange = (e) => { setPeso(e.target.value); };
  const handleLarguraChange = (e) => { setLargura(e.target.value); };
  const handleAlturaChange = (e) => { setAltura(e.target.value); };
  const handleComprimentoChange = (e) => { setComprimento(e.target.value); };
  const handleDescricaoChange = (e) => { setDescricao(e.target.value); };
  
  const handleImagensChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImagens(selectedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "produtos"), {
        categoria: categoria,
        produto: produto,
        avaliacao: avaliacao,
        valor: valor,
        cores: cores,
        quantidade: quantidade,
        largura: largura,
        altura: altura,
        comprimento: comprimento,
        peso: peso,
        descricao: descricao
      });

      const imagensUrls = await Promise.all(
        imagens.map(async (imagem, index) => {
          const storageRef = ref(storage, `produtos/${docRef.id}/imagem_${index}`);
          await uploadBytes(storageRef, imagem);
          const imageUrl = await getDownloadURL(storageRef);
          return imageUrl;
        })
      );

      await setDoc(docRef, { imagens: imagensUrls }, { merge: true });

      setCategoria("");
      setProduto("");
      setAvaliacao("");
      setValor("");
      setCores("");
      setQuantidade("");
      setLargura("");
      setAltura("");
      setComprimento("");
      setPeso("");
      setDescricao("");
      setImagens([]);

      alert("Produto cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">

      <div className="col-auto px-0">
      <div id="sidebar" className="collapse collapse-horizontal show border-end">
            <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
            <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-bootstrap"></i> <span>Página Inicial</span> </a>
                    <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-bootstrap"></i> <span>Cadastro de Produtos</span> </a>
                </div>
            </div>
      </div>

        <main className="col ps-md-2 pt-2">
          <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-1 text-decoration-none"><i className="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
          
          <div className="page-header pt-3">
            <h2>Cadastro de Produtos</h2>
          </div>


          <div className="row">
            <div className="col-12">
              
            <form onSubmit={handleSubmit}>

<div className="mb-3">
  <label className="form-label">Categoria:</label>
  <input type="text" className="form-control" value={categoria} onChange={handleCategoriaChange} required />
  <div className="form-text">Informe a categoria do seu produto</div>
</div>

<div className="mb-3">
  <label className="form-label">Produto:</label>
  <input type="text" className="form-control" value={produto} onChange={handleProdutoChange} required />
  <div className="form-text">Informe o nome do seu produto</div>
</div>

<div className="mb-3">
  <label className="form-label">Avaliação:</label>
  <input type="text" className="form-control" value={avaliacao} onChange={handleAvaliacaoChange} required />
  <div className="form-text">Dê uma avaliação ao seu produto</div>
</div>

<div className="mb-3">
  <label className="form-label">Valor:</label>
  <input type="text" className="form-control" value={valor} onChange={handleValorChange} required />
  <div className="form-text">Informe o valor do seu produto</div>
</div>

<div className="mb-3">
  <label className="form-label">Cores:</label>
  <input type="text" className="form-control" value={cores} onChange={handleCoresChange} required />
  <div className="form-text">Informe as cores disponíveis do seu produto</div>
</div>

<div className="mb-3">
  <label className="form-label">Quantidade:</label>
  <input type="text" className="form-control" value={quantidade} onChange={handleQuantidadeChange} required />
  <div className="form-text">Informe a quantidade do seu produto</div>
</div>

<div className="mb-3">
  <label className="form-label">Peso:</label>
  <input type="text" className="form-control" value={peso} onChange={handlePesoChange} required />
  <div className="form-text">Informe o peso do seu produto</div>
</div>

<div className="mb-3">
  <label className="form-label">Largura:</label>
  <input type="text" className="form-control" value={largura} onChange={handleLarguraChange} required />
  <div className="form-text">Informe a largura do seu produto</div>
</div>

<div className="mb-3">
  <label className="form-label">Altura:</label>
  <input type="text" className="form-control" value={altura} onChange={handleAlturaChange} required />
  <div className="form-text">Informe a altura do seu produto</div>
</div>

<div className="mb-3">
  <label className="form-label">Comprimento:</label>
  <input type="text" className="form-control" value={comprimento} onChange={handleComprimentoChange} required />
  <div className="form-text">Informe o comprimento do seu produto</div>
</div>

<div className="mb-3">
  <label className="form-label">Descrição:</label>
  <textarea className="form-control" value={descricao} rows={15} cols={60} onChange={handleDescricaoChange} required></textarea>
  <div className="form-text">Informe a descrição completa do seu produto</div>
</div>

<div className="mb-3">
  <label className="form-label">Imagens:</label>
  <input type="file" className="form-control" multiple onChange={handleImagensChange} />
  <div className="form-text">Envie as imagens do seu produto</div>
</div>

<button type="submit" className="btn btn-primary">Cadastrar</button>

</form>
                    
              
                </div>
            </div>
        
      
        
      </main>
      

      </div>
    </div>
  );
}

export default ItemCadastro;
