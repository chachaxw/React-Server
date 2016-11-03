import React from "react";
import MoreInfo from "../common/MoreInfo";
import Button from "../common/Button";

const HomeMore = React.createClass({
    render: function() {
        return (
            <MoreInfo style={{background: "#fff"}}>
                <div className="home-more-works">
                    <p>
                        You can see more design works in the <a href="">Portfolio</a> , if you need a designer or a front-end developer, you can get in touch me, I’ll aways be there.
                    </p>
                    <Button href="">
                        More Works
                    </Button>
                </div>
            </MoreInfo>
        )
    }

});

export default HomeMore;