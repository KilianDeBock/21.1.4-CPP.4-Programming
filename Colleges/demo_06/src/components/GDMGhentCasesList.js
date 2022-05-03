import { AlertDanger } from "./Alert";
import useFetch from "../hooks/useFetch";

const GDMGHENT_API_PROJECTS = "https://www.gdm.gent/static/data/cases.json";

const GDMGhentCasesList = () => {
  const [data, error, isLoading] = useFetch(GDMGHENT_API_PROJECTS);
  return (
    <div className="container">
      <div className="row">
        {isLoading && (
          <img
            src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
            alt="Loading"
            style={{ width: "3rem", height: "3rem" }}
          />
        )}
        {error && <AlertDanger title="Error" message={error.message} />}
        {data &&
          data.map((project) => {
            return (
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={project.Picture}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.Title}</h5>
                    <p className="card-text">{project.Description}</p>
                    <a href="#" className="btn btn-primary">
                      Go somewere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GDMGhentCasesList;
