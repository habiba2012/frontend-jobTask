import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Map from './Map';
import Search from './Search';
import SearchResult from './SearchResult';

const Destination = () => {
    const { search } = useContext(UserContext);

    return (
        <Container fluid style={{
            backgroundImage: "url(" + "https://images.unsplash.com/photo-1605289355680-75fb41239154?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'

        }}>
            <Row>
                <Col xs={12} md={4}>
                    {search.isSearched ? <SearchResult /> : <Search />}
                </Col>
                <Col xs={12} md={8}>
                    <Map />
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;