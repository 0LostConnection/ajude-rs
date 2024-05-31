import React from 'react'

import { Helmet } from 'react-helmet'

import './landing.css'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>Ajude RS - Juntos pelo Rio Grande do Sul!</title>
      </Helmet>
      <div className="landing-landing">
        <div className="landing-footer">
          <img
            src="/external/divider1309-29on.svg"
            alt="Divider1309"
            className="landing-divider"
          />
          <div className="landing-footer-container">
            <div className="landing-footer-coluna1">
              <div className="landing-logo-png">
                <img
                  src="/external/logo1i683-8xp1-200h.png"
                  alt="Logo1I683"
                  className="landing-logo1"
                />
              </div>
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-link"
              >
                <img
                  src="/external/iconessociais1288-byu.svg"
                  alt="IconesSociais1288"
                  className="landing-icones-sociais"
                />
              </a>
            </div>
            <div className="landing-footer-coluna2">
              <div className="landing-contato">
                <div className="landing-contato1">
                  <span className="landing-text002 Smalltext">
                    <span>contato@ajuders.org</span>
                  </span>
                  <span className="landing-text004 Smalltext">
                    <span>(xx) xxxx-xxxx</span>
                  </span>
                  <span className="landing-text006 Smalltext">
                    <span>Rua Exemplo, 123, Porto Alegre, RS</span>
                  </span>
                </div>
                <span className="landing-text008 Smalltext">
                  <span>Contato</span>
                </span>
              </div>
              <div className="landing-navegao">
                <div className="landing-navegao1">
                  <a href="#sobre" className="landing-text010">
                    <span>Sobre o Projeto</span>
                  </a>
                  <a href="#comoajudar" className="landing-text012">
                    <span>Como Ajudar</span>
                  </a>
                  <a href="#itens" className="landing-text014">
                    <span>Itens Necessários</span>
                  </a>
                  <a href="#feedback" className="landing-text016">
                    <span>Depoimentos</span>
                  </a>
                  <a href="#faq" className="landing-text018">
                    <span>FAQ</span>
                  </a>
                </div>
                <span className="landing-text020 Smalltext">
                  <span>Navegação</span>
                </span>
              </div>
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-button"
              >
                <span className="landing-text022">
                  <span>Fazer doação</span>
                </span>
                <img
                  src="/external/vector3242-k5j.svg"
                  alt="Vector3242"
                  className="landing-vector"
                />
              </a>
            </div>
          </div>
          <span className="landing-text">
            <span>© 2024 Ajude RS. Todos os direitos reservados.</span>
          </span>
        </div>
        <div id="faq" className="landing-faq">
          <div className="landing-faq-content">
            <div className="landing-title">
              <span className="landing-text024">
                <span>Perguntas Frequentes (FAQ)</span>
              </span>
              <span className="landing-text026">
                <span>Respondendo suas dúvidas</span>
              </span>
            </div>
            <div className="landing-faq-container">
              <div className="landing-faq-box">
                <div>
                  <p className="landing-faq-item-title">
                    1. Como posso fazer uma doação?
                  </p>
                  <p className="landing-faq-item-text">
                    Você pode fazer uma doação de itens essenciais nos pontos
                    de coleta espalhados pela cidade ou uma doação monetária
                    através do nosso site clicando no botão
                    <span className="landing-faq-item-title"> Doe Agora</span>.
                  </p>
                </div>

                <div>
                  <p className="landing-faq-item-title">
                    2. Quais itens são mais necessários?
                  </p>
                  <p className="landing-faq-item-text">
                    Os itens mais necessários incluem alimentos não perecíveis,
                    água potável, produtos de higiene pessoal, roupas, cobertores,
                    materiais de limpeza e de primeiros socorros.
                    Veja a lista completa na seção
                    <span className="landing-faq-item-title"> Itens Necessários.</span>.
                  </p>
                </div>

                <div>
                  <p className="landing-faq-item-title">
                    3. Como posso me voluntariar?
                  </p>
                  <p className="landing-faq-item-text">
                    Você pode se inscrever como voluntário preenchendo o formulário de
                    voluntariado em nosso site. Precisamos de ajuda com operações de
                    resgate, distribuição de donativos e apoio logístico.
                  </p>
                </div>

                <div>
                  <p className="landing-faq-item-title">
                    4. Como as doações monetárias são utilizadas?
                  </p>
                  <p className="landing-faq-item-text">
                    As doações monetárias são usadas para adquirir suprimentos essenciais,
                    apoiar operações de resgate e contribuir para a reconstrução das áreas
                    afetadas. Garantimos transparência e responsabilidade no uso de todos
                    os recursos.
                  </p>
                </div>

                <div>
                  <p className="landing-faq-item-title">
                    5. Como empresas podem ajudar?
                  </p>
                  <p className="landing-faq-item-text">
                    Empresas podem se tornar parceiras do <span className="landing-faq-item-title">Ajude RS</span> oferecendo recursos,
                    serviços e apoio logístico. Entre em contato conosco para mais informações
                    sobre parcerias corporativas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="itens" className="landing-itens-necessrios">
          <div className="landing-itens-content">
            <span className="landing-text047">
              <span className="landing-text048">
                As vítimas das enchentes no Rio Grande do Sul precisam de
                diversos itens essenciais para atender suas necessidades
                imediatas.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className="landing-text050"></span>
              <span>Veja abaixo a lista de itens mais urgentes:</span>
            </span>
            <div className="landing-itens">
              <div className="landing-alimentos">
                <img
                  src="/external/rectangle82628-g8wk.svg"
                  alt="Rectangle82628"
                  className="landing-rectangle8"
                />
                <div className="landing-text052">
                  <span className="landing-text053">
                    <span>Alimentos não perecíveis</span>
                  </span>
                  <span className="landing-text055">
                    <span>
                      Arroz, feijão, macarrão, enlatados, leite em pó.
                    </span>
                  </span>
                </div>
                <img
                  src="/external/image2629-u19w-400w.png"
                  alt="Image2629"
                  className="landing-image"
                />
              </div>
              <div className="landing-alimentos1">
                <img
                  src="/external/rectangle82629-5e29.svg"
                  alt="Rectangle82629"
                  className="landing-rectangle801"
                />
                <div className="landing-text057">
                  <span className="landing-text058">
                    <span>Água potável</span>
                  </span>
                  <span className="landing-text060">
                    <span>Garrafas e galões de água.</span>
                  </span>
                </div>
                <img
                  src="/external/image2629-6h6-400w.png"
                  alt="Image2629"
                  className="landing-image1"
                />
              </div>
              <div className="landing-alimentos2">
                <img
                  src="/external/rectangle82629-skb.svg"
                  alt="Rectangle82629"
                  className="landing-rectangle802"
                />
                <div className="landing-text062">
                  <span className="landing-text063">
                    <span>Produtos de higiene pessoal</span>
                  </span>
                  <span className="landing-text065">
                    <span>
                      Sabonetes, pasta de dente, escovas de dente, absorventes,
                      fraldas.
                    </span>
                  </span>
                </div>
                <img
                  src="/external/image2630-nin-400w.png"
                  alt="Image2630"
                  className="landing-image2"
                />
              </div>
              <div className="landing-alimentos3">
                <img
                  src="/external/rectangle82630-vurc.svg"
                  alt="Rectangle82630"
                  className="landing-rectangle803"
                />
                <div className="landing-text067">
                  <span className="landing-text068">
                    <span>Roupas e cobertores</span>
                  </span>
                  <span className="landing-text070">
                    <span>
                      Roupas de frio, roupas para adultos e crianças,
                      cobertores.
                    </span>
                  </span>
                </div>
                <img
                  src="/external/image2630-ogbx-400w.png"
                  alt="Image2630"
                  className="landing-image3"
                />
              </div>
              <div className="landing-alimentos4">
                <img
                  src="/external/rectangle82631-9df8.svg"
                  alt="Rectangle82631"
                  className="landing-rectangle804"
                />
                <div className="landing-text072">
                  <span className="landing-text073">
                    <span>Materiais de limpeza</span>
                  </span>
                  <span className="landing-text075">
                    <span>Água sanitária, detergente, desinfetantes.</span>
                  </span>
                </div>
                <img
                  src="/external/image2631-7kfg-400w.png"
                  alt="Image2631"
                  className="landing-image4"
                />
              </div>
              <div className="landing-alimentos5">
                <img
                  src="/external/rectangle82631-mbv.svg"
                  alt="Rectangle82631"
                  className="landing-rectangle805"
                />
                <div className="landing-text077">
                  <span className="landing-text078">
                    <span>Materiais de primeiros socorros</span>
                  </span>
                  <span className="landing-text080">
                    <span>Curativos, gaze, esparadrapo, antissépticos.</span>
                  </span>
                </div>
                <img
                  src="/external/image2632-c2f7-400w.png"
                  alt="Image2632"
                  className="landing-image5"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="feedback" className="landing-feedback">
          <div className="landing-feedback-content">
            <div className="landing-title1">
              <span className="landing-text082">
                <span className="landing-text083">
                  Mais de
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="landing-text084">1000</span>
                <span> pessoas ajudadas</span>
              </span>
              <span className="landing-text086">
                <span className="landing-text087">
                  A sua ajuda faz a diferença!
                </span>
                <br></br>
                <span className="landing-text089"></span>
                <span>Confira alguns dos depoimentos que recebemos</span>
              </span>
            </div>
            <div className="landing-cards">
              <div className="landing-card1">
                <img
                  src="/external/rectangle82275-e6qj.svg"
                  alt="Rectangle82275"
                  className="landing-rectangle806"
                />
                <div className="landing-text091">
                  <span className="landing-text092">
                    <span className="landing-text093">Maria Silva</span>
                    <span>, Beneficiada</span>
                  </span>
                  <span className="landing-text095">
                    <span>
                      Eu perdi quase tudo nas enchentes, mas graças ao projeto
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="landing-text097">Ajude RS</span>
                    <span>
                      , recebi alimentos, roupas e um lugar seguro para ficar. A
                      solidariedade das pessoas foi incrível e me deu forças
                      para começar de novo.
                    </span>
                  </span>
                </div>
              </div>
              <div className="landing-card2">
                <img
                  src="/external/rectangle82212-yckb.svg"
                  alt="Rectangle82212"
                  className="landing-rectangle807"
                />
                <div className="landing-text099">
                  <span className="landing-text100">
                    <span className="landing-text101">João Pereira</span>
                    <span>, Voluntário</span>
                  </span>
                  <span className="landing-text103">
                    <span>
                      Participar como voluntário no
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="landing-text105">Ajude RS</span>
                    <span>
                      {' '}
                      foi uma experiência transformadora. Pude ajudar
                      diretamente nas operações de resgate e ver o impacto
                      positivo que pequenas ações podem ter na vida das pessoas.
                      Recomendo a todos a se envolverem de alguma forma.
                    </span>
                  </span>
                </div>
              </div>
              <div className="landing-card3">
                <img
                  src="/external/rectangle82212-iic5.svg"
                  alt="Rectangle82212"
                  className="landing-rectangle808"
                />
                <div className="landing-text107">
                  <span className="landing-text108">
                    <span className="landing-text109">Ana Oliveira</span>
                    <span>, Doadora</span>
                  </span>
                  <span className="landing-text111">
                    <span>
                      Sempre quis contribuir mais para a comunidade e, ao ver a
                      devastação das enchentes, sabia que precisava fazer algo.
                      Doar para o
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="landing-text113">Ajude RS</span>
                    <span>
                      {' '}
                      foi uma decisão fácil e saber que minha doação ajudou
                      tantas pessoas me deixa muito feliz.
                    </span>
                  </span>
                </div>
              </div>
              <div className="landing-card4">
                <img
                  src="/external/rectangle82213-7q3c.svg"
                  alt="Rectangle82213"
                  className="landing-rectangle809"
                />
                <div className="landing-text115">
                  <span className="landing-text116">
                    <span className="landing-text117">Carlos Mendes</span>
                    <span>, Parceiro Empresarial</span>
                  </span>
                  <span className="landing-text119">
                    <span>
                      Nossa empresa se uniu ao
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="landing-text121">Ajude RS</span>
                    <span>
                      {' '}
                      para oferecer apoio logístico e recursos. Foi gratificante
                      ver nossos esforços resultarem em ajuda concreta para quem
                      mais precisava. A parceria com este projeto mostrou o
                      quanto podemos fazer juntos.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="comoajudar" className="landing-como-ajudar">
          <div className="landing-ajudar-content">
            <span className="landing-text123">
              <span>Como ajudar?</span>
            </span>
            <div className="landing-cards1">
              <div className="landing-doaes">
                <div className="landing-doaes1">
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-button1"
                  >
                    <span className="landing-text125">
                      <span>Veja como</span>
                    </span>
                    <img
                      src="/external/vector4271-kbbm.svg"
                      alt="Vector4271"
                      className="landing-vector1"
                    />
                  </a>
                  <div className="landing-voluntariado">
                    <span className="landing-text127">
                      <span>Doações de Itens Essenciais</span>
                    </span>
                    <span className="landing-text129">
                      <span>
                        Doe alimentos não perecíveis, roupas, cobertores,
                        produtos de higiene pessoal e água potável.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>
                        Esses itens são fundamentais para atender às
                        necessidades imediatas das vítimas.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="landing-voluntariado1">
                <div className="landing-voluntariado2">
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-button2"
                  >
                    <span className="landing-text135">
                      <span>Veja como</span>
                    </span>
                    <img
                      src="/external/vector4280-z9k.svg"
                      alt="Vector4280"
                      className="landing-vector2"
                    />
                  </a>
                  <div className="landing-voluntariado3">
                    <span className="landing-text137">
                      <span>Voluntariado</span>
                    </span>
                    <span className="landing-text139">
                      <span>
                        Ofereça seu tempo e habilidades para ajudar nas
                        operações de resgate, distribuição de donativos e apoio
                        logístico.
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>
                        O voluntariado é uma forma poderosa de impactar
                        diretamente a comunidade.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="landing-doaes-monetrias">
                <div className="landing-doaes-monetrias1">
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-button3"
                  >
                    <span className="landing-text145">
                      <span>Veja como</span>
                    </span>
                    <img
                      src="/external/vector4289-w1g.svg"
                      alt="Vector4289"
                      className="landing-vector3"
                    />
                  </a>
                  <div className="landing-voluntariado4">
                    <span className="landing-text147">
                      <span>Doações Monetárias</span>
                    </span>
                    <span className="landing-text149">
                      <span>
                        Contribua financeiramente para que possamos adquirir
                        suprimentos essenciais e apoiar a reconstrução das áreas
                        afetadas.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>
                        Toda doação, independente do valor, é importante e será
                        utilizada com transparência e responsabilidade.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="landing-parcerias">
                <div className="landing-parcerias1">
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-button4"
                  >
                    <span className="landing-text155">
                      <span>Veja como</span>
                    </span>
                    <img
                      src="/external/vector4298-iam.svg"
                      alt="Vector4298"
                      className="landing-vector4"
                    />
                  </a>
                  <div className="landing-voluntariado5">
                    <span className="landing-text157">
                      <span>Parcerias</span>
                    </span>
                    <span className="landing-text159">
                      <span className="landing-text160">
                        Empresas e organizações podem se tornar parceiras do
                        <span />
                      </span>
                      <span className="landing-text161">Ajude RS</span>
                      <span>
                        {' '}
                        e contribuir com recursos, serviços e apoio logístico.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>
                        Juntos, podemos ampliar nosso alcance e eficácia.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sobre" className="landing-sobre">
          <div className="landing-sobre-content">
            <iframe className="landing-map" src="https://satelliteimagerydemostg.z5.web.core.windows.net/damage-assessment/brazil_porto_alegre_05_08_2024.html" alt="Mapa Porto Alegre - Antes e Depois" />
            <div className="landing-topic1">
              <div className="landing-sobre-title">
                <p>Ajude RS - Solidariedade em Ação</p>
              </div>
              <div className="landing-sobre-text-container">
                <div className="landing-sobre-text">
                  <p>
                    O <b>Ajude RS</b> é uma iniciativa criada para apoiar as pessoas afetadas pelas
                    recentes enchentes no <b>Rio Grande do Sul</b>. Nosso objetivo é mobilizar a
                    comunidade para oferecer ajuda imediata e eficaz às famílias e comunidades
                    impactadas por essa calamidade.
                  </p>
                </div>
                <div className="landing-sobre-text">
                  <p>
                    A missão do <b>Ajude RS</b> é prestar assistência emergencial às vítimas das
                    enchentes, proporcionando recursos essenciais e apoio necessário para a
                    reconstrução de suas vidas. Acreditamos na força da solidariedade e na
                    importância de cada contribuição para transformar a realidade dessas pessoas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-hero">
          <div>
            <div className="landing-video-effect"></div>
            <video className="landing-video" autoPlay muted loop>
              <source src="/external/RS.mp4" type="video/mp4" />
            </video>

          </div>
          <div className="landing-title2">
            <div className="landing-text181">
              <span className="landing-text182">
                <span>Juntos pelo Rio Grande do Sul!</span>
              </span>
              <span className="landing-text184">
                <span className="landing-text185">Doe agora e ajude quem</span>
                <span> precisa!</span>
              </span>
            </div>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-button5"
            >
              <span className="landing-text179">
                <span>Doe agora</span>
              </span>
              <img
                src="/external/vector1114-5al.svg"
                alt="Vector1114"
                className="landing-vector5"
              />
            </a>
          </div>
        </div>
        <div className="landing-navigation">
          <div className="landing-logo-png1">
            <img
              src="/external/logo-branca.png"
              alt="Logo1I683"
              className="landing-logo11"
            />
          </div>
          <div className="landing-items">
            <a href="#sobre" className="landing-text197 Bodytext">
              <span>Sobre o Projeto</span>
            </a>
            <a href="#comoajudar" className="landing-text187 Bodytext">
              <span>Como Ajudar</span>
            </a>
            <a href="#itens" className="landing-text189 Bodytext">
              <span>Itens Necessários</span>
            </a>
            <a href="#feedback" className="landing-text191 Bodytext">
              <span>Depoimentos</span>
            </a>
            <a href="#faq" className="landing-text193 Bodytext">
              <span>FAQ</span>
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-button6"
            >
              <span className="landing-text195">
                <span>Fazer doação</span>
              </span>
              <img
                src="/external/vector1215-meiu.svg"
                alt="Vector1215"
                className="landing-vector6"
              />
            </a>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Landing
