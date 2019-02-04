import React from 'react';

class Footer extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }


    render() {
        return (
            <React.Fragment>
                <footer className="page-footer font-small bg-success pt-4 fixed-bottom">
                    <div className="footer-copyright text-center py-3 text-white">
                        © 2019 Copyright: Recycle Database
                    </div>
                </footer>

            </React.Fragment>
        )
    }
}

export default Footer;