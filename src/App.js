import './App.css';
import Outline from'./components/Outline/Outline';

function App() {
  return <div className="App">
    <Outline bgColor="blue" className="outer">
      <Outline bgColor="pink">
        <Outline bgColor="yellow">
          <Outline bgColor="green">
            <Outline bgColor="orange">
              <Outline bgColor="purple">
                <Outline bgColor="red">
                  <Outline bgColor="blue">
                    <Outline bgColor="pink">
                      <Outline bgColor="yellow">
                        <Outline bgColor="green">
                          <Outline bgColor="orange">
                            <Outline bgColor="purple">
                              <Outline bgColor="red">
                                <div className="content-outline">
                                  <h1>All out Midgarde Party!</h1>
                                  <h2>Come join Odin's <span className="word-emphasis">ONLY</span> son on midgarde for the party of the century! While Freya is away, Thor will play.</h2>
                                  <p className="word-deemphasis">Just dont tell Freya please?</p>
                                  <img className="thor-picture"src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/09/107_HBA0600_comp_v003.1052.jpg" alt="" />
                                  <p>This is the party we have all been waiting for. Word is, the Jotun prince loki will even be there. So how could you afford to miss it?!?</p>
                                </div>
                              </Outline>
                            </Outline>
                          </Outline>
                        </Outline>
                      </Outline>
                    </Outline>
                  </Outline>
                </Outline>
              </Outline>
            </Outline>
          </Outline>
        </Outline>
      </Outline>
    </Outline>
  </div>;
}

export default App;
