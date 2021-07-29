import {React,Component} from 'react';


class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoadded: true,
            member:[]
         }
    }
   async componentDidMount(){
        const url="https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
        const res = await fetch(url);
        const data = await res.json();
        this.setState({member:data.Array[46], isLoadded:false}) 
        console.log(data);
    
    }


    render() { 
        return ( 
            <div>{this.state.isLoadded || !this.state.member ?(<div>Loading...</div>):(<div>
                <div>
                    {this.state.member.name}
                    {this.state.member.id}
                    {this.state.member.role}
                </div>
                </div>
            )}
            </div>
         );
    }
}
 
export default Fetch;