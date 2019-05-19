import React from 'react';

export default () => {
    return <section class="hero is-medium"
        style={{
            backgroundImage: `url(/img/hajj-background.jpg)`,
            backgroundPosition: `top left`,
            backgroundSize: 'cover',
            backgroundAttachment: `fixed`,
        }}>
        <div class="hero-body">
            <div class="container">
            <div class="columns has-background-warning">
                    <div class="column">
                        <h2 class="title has-text-centered">
                            Nova Hajj Umrah
                        </h2>
                    </div>
                </div>
                <div class="columns has-background-warning m-t-sm">
                    <div class="column">
                        <h2 class="subtitle has-text-centered">
                            Providing Trips for Hajj and Umrah since 1993
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
}