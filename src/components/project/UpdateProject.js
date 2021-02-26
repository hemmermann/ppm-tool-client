import React, { Component } from "react";
import { getProject, createProject } from "../../actions/projectActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateProject extends Component {
//   constructor() {
//     super();

//     this.state = {
//       id: "",
//       projectName: "",
//       projectIdentifier: "",
//       description: "",
//       start_date: "",
//       end_date: "",
//     };
// }

  updateProject(props) {
    const [project,updateProject] = useState( {
      id: "",
      projectName: "",
      projectIdentifier: "",
      description: "",
      start_date: "",
      end_date: "",
    })

    useEffect(() => {
      effect
      return () => {
        cleanup
      }
    }, [input])

  }

  // componentWillReceiveProps(nextProps) {
  //   const {
  //     id,
  //     projectName,
  //     projectIdentifier,
  //     description,
  //     start_date,
  //     end_date
  //   } = nextProps.project;

  //   this.setState({
  //     id,
  //     projectName,
  //     projectIdentifier,
  //     description,
  //     start_date,
  //     end_date
  //   });
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "getDerivedStateFromProps: " + JSON.stringify(nextProps.project)
    );

      return nextProps.project
    
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }

  changeHandler = (e) => {
    console.log("e name: " + e.target.name);
    console.log("e value" + e.target.value);
    console.log("state project :" + JSON.stringify(this.state));
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });

    console.log("changeHandler state: " + this.state.project);
  };

  // onChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // }

  onSubmit(e) {
    e.preventDefault();
    const updateProject = {
      id: this.state.id,
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };

    this.props.createProject(updateProject, this.props.history);
  }

  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Project form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={(e) => this.changeHandler(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Project Description"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    onChange={(event) => this.changeHandler(event)}
                  />
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="start_date"
                    value={this.state.start_date}
                    onChange={this.onChange}
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="end_date"
                    value={this.state.end_date}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProject.propTyoes = {
  getProject: PropTypes.func.isRequired,
  createProject: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps, { getProject, createProject })(
  UpdateProject
);
