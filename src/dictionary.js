import "./dictionary.css";

function Dictionary() {
  return (
    <div className="box1">
      <div className="card mb-3">
        <div className="card-body">
          <form>
            <input type="search" placeholder="find word"></input>
            <input type="submit" value="search"></input>
          </form>
          <br />
          <div className="main-text">
            <h5 className="card-title" id="noun">
              noun
            </h5>
            <p className="card-text" id="define">
              the sacred asp as represented upon the headdress of divinities and
              royal personages of ancient Egypt, usually directly over the
              forehead, as an emblem of supreme power.
            </p>
          </div>
          <h1 className="bigword">uraeus</h1>{" "}
          <small class="text-muted" id="small">
            [ yoo-ree-uhs ]
          </small>
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
