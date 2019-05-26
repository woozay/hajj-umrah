import React from 'react';

export default ({ heading, subheading, image }) => {
    return <section class="hero is-medium"
        style={{
            backgroundImage: `url(${
                !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundPosition: `top left`,
            backgroundSize: 'cover',
            backgroundAttachment: `fixed`,
        }}>
        <div class="hero-body">
            <div class="container">
            <div class="columns has-background-warning">
                    <div class="column">
                        <h2 class="title has-text-white has-text-centered">
                            { heading }
                        </h2>
                    </div>
                </div>
                <div class="columns has-background-warning m-t-sm">
                    <div class="column">
                        <h2 class="subtitle has-text-white has-text-centered">
                            { subheading }
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
}