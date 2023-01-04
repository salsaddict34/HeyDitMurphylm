import React from "react";

const MoviePage = () => {

    return (
        <div className="moviePage">
            <section className="MovieContainer">
                <div>
                    <div className="Movie">
                        <div className="MoviePoster"></div>
                        <div className="UserOpinion"></div>
                    </div>
                    <div className="MovieInfos">
                        <h2>Movie Name</h2>
                        <div className="MovieSynopsis"></div>
                        <div className="MovieRate"></div>
                    </div>
                </div>
                <div className="MovieTrailer">
                    
                </div>
            </section>
            <hr />
            <section className="CommentsContainer">
                <div className="MovieUserCommentary">

                </div>
                <div className="MovieComments">

                </div>
            </section>
        </div>
    )
}

export default MoviePage