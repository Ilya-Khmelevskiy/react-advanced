import PropTypes from 'prop-types';
import Header from '../components/Header';

export default function Page({children, cool}) {
    return (
        <div>
            <Header/>
            <h2>I am the page component</h2>
            <h3>{cool}</h3>
            {children}
        </div>
    );
}

Page.protoTypes = {
    cool: PropTypes.string,
    children: PropTypes.oneOf([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};