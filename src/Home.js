import React from 'react';
import './Home.css';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            borderStyle: {
                width: '0%',
            },
            singleStyle: {
                opacity: 0.5,
            },
        };
        this.getToExternal = this.getToExternal.bind(this);
        this.mouseInLink = this.mouseInLink.bind(this);
        this.mouseOutLink = this.mouseOutLink.bind(this);
    }

    componentDidMount() {
        this.printWelcomeMsg();
    }

    printWelcomeMsg() {
        console.log('Version: 1.0.0');
        console.log('Find the code here: https://github.com/satancp/site');
        console.log('Have a great day! 🎉');
    }

    getToExternal(name) {
        switch (name) {
            case 'github':
                window.location.href = 'https://github.com/satancp';
                break;
            default:
                window.location.href = 'https://github.com/satancp';
                break;
        }
    }

    mouseInLink() {
        this.setState({
            borderStyle: {
                width: '100%',
            },
            singleStyle: {
                opacity: 1,
            },
        });
    }

    mouseOutLink() {
        this.setState({
            borderStyle: {
                width: '0%',
            },
            singleStyle: {
                opacity: 0.5,
            },
        });
    }

    render() {
        const { borderStyle, singleStyle } = this.state;
        return (
            <div className="container">
                <div className="name">{'peng cheng'}</div>
                <div className="description">{'software engineer & architect'}</div>
                <div className="external-links">
                    <div
                        className="external-links-single"
                        style={singleStyle}
                        onClick={() => this.getToExternal('github')}
                        onMouseEnter={this.mouseInLink}
                        onMouseLeave={this.mouseOutLink}>
                        <div className="external-links-single-content">{'github'}</div>
                        <div className="external-links-single-border-container">
                            <div className="external-links-single-border-left" style={borderStyle} />
                            <div className="external-links-single-border-right" style={borderStyle} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
