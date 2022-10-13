/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { BiCalendarPlus } from 'react-icons/bi';

function AddAppointment() {
  return (
    <Container>
      <Row>
        <Col className="mt-4">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {' '}
                <BiCalendarPlus className="add-appointment-logo me-5" />{' '}
                <p className="add-appointment-text mb-0">Add Appointment</p>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br />{' '}
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>

    /* <div>
      <button
        className="bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md"
        type="button"
      >
        <div>
          <BiCalendarPlus className="inline-block align-text-top" /> Add Appointment
        </div>
      </button>
      <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label
            htmlFor="ownerName"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Owner Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="ownerName"
              id="ownerName"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label
            htmlFor="petName"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Pet Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="petName"
              id="petName"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label
            htmlFor="aptDate"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Apt Date
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="date"
              name="aptDate"
              id="aptDate"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label
            htmlFor="aptTime"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Apt Time
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="time"
              name="aptTime"
              id="aptTime"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label
            htmlFor="aptNotes"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Appointment Notes
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="aptNotes"
              name="aptNotes"
              rows="3"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Detailed comments about the condition"
            />
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div> */
  );
}

export default AddAppointment;
