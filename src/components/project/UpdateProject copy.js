import React, { useEffect, useState } from "react";
import { getProject, updateProject } from "../../actions/projectActions";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { useParams } from "react-router";

const UpdateProject = (props) => {
  let { id } = useParams();

  const currProject = useSelector((state) => state.project.project);

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getProject(id));
  }, []);

  const [project, setProject] = useState({});

  useEffect(() => {
    setProject(currProject)
  },[])



  const handleSubmit = (event) => {
    if (event) {
      console.log(event);
      event.preventDefault();
    }
    console.log('handle submit');
    dispatch(updateProject(project));
  };

  console.log(project)

  const handleInputChange = (event) => {
    event.persist();
    setProject((project) => ({
      ...project,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="project">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">Update Project form</h5>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg "
                  placeholder="Project Name"
                  name="projectName"
                  value={project.projectName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Unique Project ID"
                  name="projectIdentifier"
                  value={project.projectIdentifier}
                  disabled
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Project Description"
                  name="description"
                  value={project.description}
                  onChange={handleInputChange}
                />
              </div>
              <h6>Start Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="start_date"
                  value={project.start_date}
                  onChange={handleInputChange}
                />
              </div>
              <h6>Estimated End Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="end_date"
                  value={project.end_date}
                  onChange={handleInputChange}
                />
              </div>

              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UpdateProject);
