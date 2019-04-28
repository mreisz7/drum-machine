import React from 'react';
import './scss/DrumMachine.scss';

interface DrumMachineState {
  sampleSrc: {[sampleName: string]: string};
  displayText: string;
}

export class DrumMachine extends React.Component<{}, DrumMachineState> {
  sampleRefs: {[sampleName: string]: React.RefObject<HTMLAudioElement>};

  constructor(props: {}) {
    super(props);
    this.state = {
      sampleSrc: {
        sample1: "./samples/kick1.wav",
        sample2: "./samples/large-tom1.wav",
        sample3: "./samples/medium-tom1.wav",
        sample4: "./samples/small-tom1.wav",
        sample5: "./samples/snare-bottom1.wav",
        sample6: "./samples/sidestick1.wav",
        sample7: "./samples/ride-bell1.wav",
        sample8: "./samples/crash1.wav",
        sample9: "./samples/chh1.wav",
      },
      displayText: '',
    };

    this.sampleRefs = {
      sample1: React.createRef(),
      sample2: React.createRef(),
      sample3: React.createRef(),
      sample4: React.createRef(),
      sample5: React.createRef(),
      sample6: React.createRef(),
      sample7: React.createRef(),
      sample8: React.createRef(),
      sample9: React.createRef(),
    };
    
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  padKeys: string[] = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, false);
  }

  handleKeyPress(event: KeyboardEvent) {
    switch (event.code) {
      case 'Key' + this.padKeys[0]:
        this.play(1);
        break;
      case 'Key' + this.padKeys[1]:
        this.play(2);
        break;
      case 'Key' + this.padKeys[2]:
        this.play(3);
        break;
      case 'Key' + this.padKeys[3]:
        this.play(4);
        break;
      case 'Key' + this.padKeys[4]:
        this.play(5);
        break;
      case 'Key' + this.padKeys[5]:
        this.play(6);
        break;
      case 'Key' + this.padKeys[6]:
        this.play(7);
        break;
      case 'Key' + this.padKeys[7]:
        this.play(8);
        break;
      case 'Key' + this.padKeys[8]:
        this.play(9);
        break;
      default:
        break;
    }
  }

  play(sampleId: number) {
    const sample = this.sampleRefs[`sample${sampleId}`]
    sample.current!.pause();
    sample.current!.currentTime = 0;
    sample.current!.play();
    this.setState({ displayText: this.padKeys[sampleId - 1] });    
  }

  renderHeader() {
    return (
      <header>
      </header>
    )
  }

  renderDrumMachine() {
    const drumPads: JSX.Element[] = Array.from({ length: this.padKeys.length }, 
      (_: object, index: number) => 
        <div className="drum-pad" 
          key={`drum-pad-${index + 1}`} 
          id={`drum-pad-${index + 1}`}
          onClick={() => this.play(index + 1)}>
          {this.padKeys[index]}
          <audio
            id={this.padKeys[index]}
            className="clip"
            src={this.state.sampleSrc[`sample${index + 1}`]} 
            ref={this.sampleRefs[`sample${index + 1}`]} />
        </div>
    );
    return (
      <>
        <div id="display">{this.state.displayText}</div>
        {drumPads}
      </>
    )
  }

  renderFooter() {
    return (
      <footer></footer>
    )
  }

  render() {
    return (
      <>
        {this.renderHeader()}
        {this.renderDrumMachine()}
        {this.renderFooter()}
      </>
    )
  }
}
