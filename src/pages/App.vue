<template>
  <div>
    <header>
      <!-- inicio Cabecalho -->
      <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container">
          <a href="#" class="navbar-brand">
            <img src="../assets/logotcs.svg" width="100" />
          </a>

          <button class="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="nav-principal">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href class="nav-link">Contato</a>
              </li>
              <li class="nav-item">
                <a href class="nav-link">Serviços</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!--/fim Cabecalho -->

    <section id="home">
      <!-- Início seção home -->
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex mt-5">
            <!-- Textos da seção -->
            <div class="align-self-center">
              <h1 class="title-home">Criamos soluções digitais para seu modelo de negócio crescer.</h1>
              <p></p>
            </div>
          </div>

          <div class="col-md-6 d-flex justify-content-center">
            <div class="box">
              <Lottie
                path="https://assets10.lottiefiles.com/packages/lf20_fylFH5.json"
                :loop="true"
                :autoPlay="true"
                :speed="1"
                @AnimControl="setAnimController"
              />
            </div>
          </div>

          <!--/fim textos da seção -->
        </div>
      </div>
    </section>
    <!--/fim seção home -->

    <section class="caixa">
      <!--/Início seção recursos -->
      <div class="container">
        <div class="row">
          <div class="col-md-4 d-flex flex-column">
            <img src="@/assets/110-api.png" class="img-fluid max align-self-center" />
            <h4 class="align-self-center mt-3">API</h4>
            <p>
              Um API Manager é um componente de software responsável por centralizar, assegurar, desenvolver
              e monitorar suas APIs. Ele oferece uma série de
              features que possibilitam ao desenvolvedor promover
              integrações 'um click'.
            </p>
          </div>

          <div class="col-md-4 d-flex flex-column">
            <img src="@/assets/015-monitor-23.png" class="img-fluid max align-self-center" />
            <h4 class="align-self-center mt-3">Web</h4>
            <p>Nós atuamos como um parceiro estratégico, conectando todas as habilidades necessárias no desenvolvimento de uma iniciativa digital. Mergulhamos fundo no seu modelo de negócio para gerar grandes ideias e implementá-las rapidamente.</p>
          </div>
          <div class="col-md-4 d-flex flex-column">
            <img src="@/assets/333-smartphone-7.png" class="img-fluid max align-self-center" />
            <h4 class="align-self-center mt-3">Mobile</h4>
            <p>Com as tecnologias mais adequada ao seu negócio, construímos seu aplicativo para Iphone e Android que atenda às suas necessidades e não que você tenha que se adequar</p>
          </div>
        </div>
      </div>
    </section>
    <!--/FIM seção recursos -->

    <section class="caixa1">
      <!--/Início seção saiba -->
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="container-tcs d-flex">
             <div class="align-self-end">
                <h2 class="title-tcs">Imagine, Acredite, REALIZE!</h2>
              <p class="phrase-tcs">A empresa: A TCS é reconhecida como uma empresa comprometida, moderna e que traduz as necessidades de seus clientes, desenvolvendo projetos customizados e eficientes. Com resultados comprovados no mercado, aplicamos métodos inovadores e exclusivos nas áreas de planejamento e business intelligence (BI). A fundação da TCS em 2019 é fruto da trajetória de sucesso de um grupo de empreendedores que sempre tiveram como meta desenvolver soluções e estudos que propiciassem a redução de custos e a melhoria da performance dos resultados de seus clientes.</p>
      
             </div>
            </div>
            
          </div>
          <div class="col-md-6">
            <img src="@/assets/compromisso.svg" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <!--/FIM seção saiba -->

    <section class="caixa2">
      <!--/Início seção juros -->
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="@/assets/compromisso.svg" class="img-fluid" />
          </div>
          <div class="col-md-6 d-flex">
            <div class="align-self-center">
              <h2>Lorem Ipsum is simply dummy text of</h2>
              <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p>
              <a href class="btn btn-primary">Veja mais</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/FIM seção juros -->

    <footer class="mt-4 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <p>
              <a href>Home</a>
              <a href>Recursos</a>
              <a href>Benefícios</a>
              <a href>Preços</a>
            </p>
          </div>
          <div class="col-md-4 d-flex justify-content-end">
            <a href class="btn btn-outline-dark">
              <i class="fab fa-facebook"></i>
            </a>
            <a href class="btn btn-outline-dark ml-2">
              <i class="fab fa-twitter"></i>
            </a>
            <a href class="btn btn-outline-dark ml-2">
              <i class="fab fa-instagram"></i>
            </a>
            <a href class="btn btn-outline-dark ml-2">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Lottie from "./components/Lottie";

export default {
  components: {
    Lottie
  },
  data() {
    return {
      anim: null
    };
  },
  methods: {
    setAnimController(anim) {
      /* eslint-disable */

      console.log(anim);
      this.anim = anim;
    }
  }
};
</script>

<style lang="scss" scoped>
$roxo: #633a82;
$preto: #1b262c;
$azul-claro: #3282b8;

nav .navbar-nav li a {
  color: $roxo !important;
  font-size: 20px;
  transition: 1s;
}

nav .navbar-nav li a:hover {
  color: $azul-claro !important;
  font-size: 20px;
}

.title-home {
  color: #3282b8;
  font-weight: bold;
}

.box {
  width: 400px;
  height: 400px;
}
.max {
  max-width: 150px;
}

.caixa1 {
  background-image: url("../assets/base1.svg");
 
  background-size: cover;
}

.caixa2 {
  background-image: url("../assets/base2.svg");
}

.title-tcs{
  color: white;
}

.phrase-tcs{
  color: #EAEEF9;
}
.container-tcs{
  height: 400px;
}


</style>
