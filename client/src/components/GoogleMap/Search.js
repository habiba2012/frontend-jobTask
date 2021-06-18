import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const Search = () => {
    const { register, handleSubmit } = useForm();
    const { search, setSearch } = useContext(UserContext);

    const onSubmit = data => {
        data.isSearched = true;
        setSearch(data)
    }

    return (
        <>
            <Card className="mt-5" style={{ background: "#EFEFEF", borderRadius: "10px" }}>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label>Pick From</Form.Label>
                            <Form.Control className="shadow-none" defaultValue={search.pickFrom} {...register('pickFrom', { required: true })} placeholder="From" autoFocus type="text" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Pick To</Form.Label>
                            <Form.Control className="shadow-none" defaultValue={search.pickTo} {...register('pickTo', { required: true })} placeholder="To" type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control className="shadow-none"  {...register('date', { required: true })} type="date" />
                        </Form.Group>
                        <Button variant="primary" className="shadow-none" type="submit" block>
                            Search
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default Search;