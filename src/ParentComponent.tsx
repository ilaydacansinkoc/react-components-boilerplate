import React from 'react';
import I from 'immutable';
import ChildComponent from './ChildComponent';

interface State {
  data: any;
}

interface HandlerDetails {
  name: string;
  age: number;
  eyecolor: string;
  hairstyle: string;
}

class ParentComponent extends React.PureComponent<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: I.fromJS({
        name: '',
        age: 0,
        eyecolor: '',
        hairstyle: ''
      })
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData(handlerDetails: HandlerDetails) {
    const data = this.state.data.set('name', handlerDetails.name).set('age', handlerDetails.age)
      .set('eyecolor', handlerDetails.eyecolor).set('hairstyle', handlerDetails.hairstyle);
    this.setState({data});
  }

  render() {
    const data = this.state.data;
    return(
      <div>
        <ChildComponent
          data={this.state.data}
          handleData={this.handleData}
        />
        {
          data.get('age', 0) !== 0 &&
          (
            <div>
              <h4>{`Name --- ${data.get('name', 'No name.')}`}</h4>
              <h4>{`Age --- ${data.get('age', 0)}`}</h4>
              <h4>{`Eyecolor --- ${data.get('eyecolor', 'No eye color.')}`}</h4>
              <h4>{`Hairstyle --- ${data.get('hairstyle', 'No hairstyle.')}`}</h4>
            </div>
          )
        }
      </div>
    );
  }
}
export default ParentComponent;
