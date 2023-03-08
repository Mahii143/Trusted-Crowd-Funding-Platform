import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class ProjectView extends Component {
    // let params = useParams();
    // let endpoint = 'https://jsonplaceholder.typicode.com/posts/'+params.id;
    // const [data, setData] = useState([]);

    // useEffect(
    //     () => {
    //         fetch(endpoint)
    //             .then(res => res.json())
    //             .then(res => setData(res))
    //     }
    // );
    // console.log(data);

    constructor(props) {
        super(props);
        this.state = {
            data: {},
        };
    }

    componentDidMount() {
        let { id } = this.props.params;
        let endpoint = 'https://jsonplaceholder.typicode.com/posts/' + id;
        console.log(endpoint);
        fetch(endpoint)
            .then(res => res.json())
            .then(data => this.setState( {data} )); //binding values to the state->data
    }

    render() {
        const {data}  = this.state;
        return (
            <div className='project-full-view'>
                <h1 className="project-view-title">
                    Project {data.id}: {data.title}
                </h1>
                <p className="project-view-description">
                    <span className='project-view-label'>
                        Project Description:
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dicta, fuga reprehenderit eligendi facilis temporibus ratione nulla impedit. Adipisci doloribus suscipit mollitia, repellendus expedita nam, non iusto soluta libero hic maiores consectetur recusandae? Animi atque expedita at alias quidem numquam sunt officiis modi, quas vitae nemo minima suscipit nesciunt fugit, aliquid deleniti distinctio pariatur dolore voluptatem magni odit consequuntur. Totam dolorem maiores repellendus possimus quibusdam? Illo soluta tempore architecto rem culpa esse, praesentium minus quam ratione! Labore, ex! A vero enim itaque quia odit eligendi aspernatur? Expedita, harum recusandae ratione ipsum sunt illum quaerat, beatae voluptate, sit provident deleniti iste.
                </p>
                <span className='project-view-author'>
                    <span className='project-view-label'>
                        Author name:
                    </span>
                    Mohamed Mahir A S
                </span>
                <span className='project-view-proposed-date'>
                    <span className='project-view-label'>
                        Proposed Date:
                    </span>
                    08-03-23
                </span>
                <span className='project-view-estimated-mcap'>
                    <span className='project-view-label'>
                        Estd. Market cap:
                    </span>
                    10000000$
                </span>
                <p className='project-view-patent'>
                    <span className='project-view-label'>
                        Patent Details:
                    </span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, voluptatum velit! Itaque, at iste. Ullam possimus debitis, neque perspiciatis repellat asperiores ad, repudiandae veniam dolor optio fugit at voluptates laborum similique dignissimos tenetur qui corporis placeat distinctio laudantium sapiente consequatur laboriosam dolores. Dolor dolorum natus, consequatur veniam ea sed quisquam.
                </p>
                <div className="project-view-images">
                    <span className='project-view-label'>
                        Attachments:
                    </span>
                    <img src="" alt="img1" />
                </div>
            </div>
        )
    }
}
export default withParams(ProjectView);