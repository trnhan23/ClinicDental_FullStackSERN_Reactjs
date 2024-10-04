import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tratu extends Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://stc-laban.zdn.vn/dictionary/js/plugin/lbdictplugin.frame.min.js';
        script.async = true;

        script.onload = () => {
            const config = { s: "https://dict.laban.vn", w: 500, h: 500, hl: 2, th: 3 };
            if (window.lbDictPluginFrame) {
                window.lbDictPluginFrame.init(config);
            }
        };

        document.body.appendChild(script);
    }

    render() {
        return (
            <div>
                {/* This is where the plugin frame will be rendered */}
                <div id="lbdict_plugin_frame"></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tratu);
