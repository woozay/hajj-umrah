import React from 'react';

export default ({ heading, subheading, image }) => {
    return <section className="hero is-medium"
        style={{
            backgroundImage: `url(${
                !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundPosition: `top left`,
            backgroundSize: 'cover',
            backgroundAttachment: `fixed`,
        }}>
        <div className="hero-body">
            <div className="container">
            <div className="columns has-background-warning">
                    <div className="column">
                        <h2 className="title has-text-white has-text-centered">
                            { heading }
                        </h2>
                    </div>
                </div>
                <div className="columns has-background-warning m-t-sm">
                    <div className="column">
                        <h2 className="subtitle has-text-white has-text-centered">
                            { subheading }
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
}