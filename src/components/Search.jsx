import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BiSearch, BiCheck } from 'react-icons/bi';

function Search() {
  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className="mb-3 py-5">
            <InputGroup.Text className="form-element-background">
              <BiSearch className="search-logo" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              name="query"
              id="query"
              aria-label="Text input with dropdown button"
              size="lg"
              className="form-element-background"
              placeholder="Search"
            />
            <DropdownButton title="Sort By" id="input-group-dropdown" align="end">
              <Dropdown.Item className="form-element-background d-flex justify-content-between px-0 py-2">
                Pet Name <BiCheck className="search-logo" />
              </Dropdown.Item>
              <Dropdown.Item className="form-element-background d-flex justify-content-between px-0 py-2">
                Owner Name <BiCheck className="search-logo" />
              </Dropdown.Item>
              <Dropdown.Item className="form-element-background d-flex justify-content-between px-0 py-2">
                Date <BiCheck className="search-logo" />
              </Dropdown.Item>
              <Dropdown.Divider className="form-element-background" />
              <Dropdown.Item className="form-element-background d-flex justify-content-between px-0 py-2">
                Asc <BiCheck className="search-logo" />
              </Dropdown.Item>
              <Dropdown.Item className="form-element-background d-flex justify-content-between px-0 py-2">
                Desc <BiCheck className="search-logo" />
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
