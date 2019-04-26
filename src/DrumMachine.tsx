import React from 'react';
import './scss/DrumMachine.scss';

interface Beat {
  [sampleName: string]: boolean;
}

interface DrumMachineState {
  beatsPerMinute: number;
  playStatus: 'play' | 'pause' | 'stop';
  patternLength: number;
  beatSubDivisions: number;
  metronomeOn: boolean;
  sampleSrc: {[sampleName: string]: string};
  beatPattern: Array<Beat>;
}

export class DrumMachine extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = { };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress, false);
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.code === 'KeyA') {
      console.log('A pressed');
    }
    if (event.code === 'KeyB') {
      console.log('B pressed');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    )
  }
}
