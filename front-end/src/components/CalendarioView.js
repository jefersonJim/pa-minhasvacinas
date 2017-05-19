import React from 'react';
import ReactDOM from 'react-dom';

import {
  Row,
  Col,
  Grid,
  Panel,
  Table,
  Checkbox,
  PanelBody,
  PanelHeader,
  FormControl,
  PanelContainer,
  fullCalendar,
} from '@sketchpixy/rubix';

export default class CalendarioView extends React.Component {
  componentDidMount() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2017-05-12',
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Sprint Review',
          start: '2017-05-01'
        },
        {
          title: 'Arquitetura',
          start: '2017-05-07',
          end: '2017-05-10'
        },
        {
          id: 999,
          title: 'Aula de Revisão',
          start: '2017-05-09T16:00:00'
        },
        {
          id: 999,
          title: 'Cliente Reunião',
          start: '2017-05-16T16:00:00'
        },
        {
          title: 'Conferencia',
          start: '2017-05-11',
          end: '2017-05-13'
        },
        {
          title: 'Reunião Diaria',
          start: '2017-05-12T10:30:00',
          end: '2017-05-12T12:30:00'
        },
        {
          title: 'Sprint Backlog',
          start: '2017-05-12T12:00:00'
        },
        {
          title: 'Reunião',
          start: '2017-05-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2017-05-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2017-05-12T20:00:00'
        },
        {
          title: 'Reunião CLiente',
          start: '2017-05-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2017-05-28'
        }
      ]
    });


    /* initialize the external events
    -----------------------------------------------------------------*/

    $('#external-events div.external-event').each(function() {

      // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
      // it doesn't need to have a start or end
      var eventObject = {
        title: $.trim($(this).text()) // use the element's text as the event title
      };

      // store the Event Object in the DOM element so we can get to it later
      $(this).data('eventObject', eventObject);

      // make the event draggable using jQuery UI
      $(this).draggable({
        zIndex: 999,
        revert: true,      // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
      });

    });


    /* initialize the calendar
    -----------------------------------------------------------------*/

    $('#external-calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar !!!
      drop: function(date) { // this function is called when something is dropped

        // retrieve the dropped element's stored Event Object
        var originalEventObject = $(this).data('eventObject');

        // we need to copy it, so that multiple events don't have a reference to the same object
        var copiedEventObject = $.extend({}, originalEventObject);

        // assign it the date that was reported
        copiedEventObject.start = date;

        // render the event on the calendar
        // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
        $('#external-calendar').fullCalendar('renderEvent', copiedEventObject, true);

        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        }

      }
    });
  }

  render() {
    return (
      <Row>
        <Col sm={12}>
          <PanelContainer>
            <Panel>
              <PanelHeader className='bg-darkgreen45 fg-white' style={{marginBottom: 0}}>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <h3>Calendario: Agenda</h3>
                    </Col>
                  </Row>
                </Grid>
              </PanelHeader>
              <PanelBody style={{padding: 25}}>
                <div id='calendar'></div>
              </PanelBody>
            </Panel>
          </PanelContainer>
          <PanelContainer>
            <Panel>
              <PanelHeader className='bg-orange75 fg-white' style={{marginBottom: 0}}>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <h3>Calendario: Eventos</h3>
                    </Col>
                  </Row>
                </Grid>
              </PanelHeader>
              <PanelBody style={{padding: 25}}>
                <div id='wrap'>
                  <div id='external-events'>
                    <h4>Meus Eventos</h4>
                    <div className='external-event'>Ciclo de Palestras</div>
                    <div className='external-event'>Dia T</div>
                    <div className='external-event'>Colação de Grau</div>
                    <div className='external-event'>Confraternização Escritório</div>
                    <div className='external-event'>Viagem</div>
                    <Checkbox id='drop-remove'>
                      remover da lista
                    </Checkbox>
                  </div>
                  <div id='external-calendar'></div>
                  <div style={{clear:'both'}}></div>
                </div>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </Col>
      </Row>
    );
  }
}