"use client";

import { useEffect } from "react";
import { SeatsioSeatingChart } from "@seatsio/seatsio-react";
import loaderSrc from "@/../public/spinner.gif";

export default function SeatsIoEvent({
  selectedTickets,
  handleTicketChange,
  eventSeatData,
  sectionData,
  pricingData,
  venueData,
  handleRemoveTicket,
  seats_io_chart_key,
  handleSeatChange,
  handleRemoveSeat,
  deselect,
  setDeselect,
  setType,
}) {
  useEffect(() => {
    setType("seats-io");
  }, [setType]);
  const {
    performance_info,
    price,
    ticket_limit,
    supportsBestAvailable,
    seats_io_left_seats_after_book_hold,
    seats_io_left_seats_after_book,
    addOnsData,
    addOnsSettings,
    discount,
    tax_info,
    tix_surcharge_info,
    trans_surcharge_info,
  } = pricingData;

  const { seats_io_public_workspace_key, currency_details } = venueData;

  function parseSeat(seat) {
    const { labels, selectedTicketType, pricing, id } = seat;
    const seatName = labels.parent + labels.own + " " + labels.section;
    const prices = pricing.ticketTypes;
    const price = prices.filter(
      (ticket) => ticket.ticketType === selectedTicketType
    );
    const seatPrice = price[0].formattedPrice.slice(
      currency_details.symbol.length,
      8
    );
    const seatCurrency = price[0].formattedPrice.slice(
      0,
      currency_details.symbol.length
    );
    const seatParent = selectedTicketType;

    return {
      seatName,
      seatParent,
      seatPrice,
      seatCurrency,
      id,
    };
  }

  function updateSelectedSeat(seat) {
    const seatData = parseSeat(seat);
    handleSeatChange(seatData);
  }

  function removeSeat(seat) {
    const { labels } = seat;
    const seatName = labels.parent + labels.own + " " + labels.section;
    handleRemoveSeat(seatName);
  }

  function setChart(createdChart) {
    console.log("chart rendered");
    deselect.chart = createdChart;
  }

  useEffect(() => {
    if (deselect.status) {
      let chart = deselect.chart;
      let arr = [deselect.id];
      chart.deselectObjects(arr);
      setDeselect({ status: false, id: null, chart: chart });
    }
  }, [deselect, setDeselect]);
  return (
    <div className="h-[80vh]  m-[30px] ">
      <SeatsioSeatingChart
        divId="canvas_container"
        workspaceKey={seats_io_public_workspace_key}
        event={performance_info.seats_io_event_key}
        onRenderStarted={(createdChart) => {
          setChart(createdChart);
        }}
        pricing={price.seats_io_categories}
        region="na"
        mode="normal"
        showSectionPricingOverlay={true}
        objectWithoutPricingSelectable={false}
        showLegend={true}
        showSeatLabels={true}
        showSectionContents="onlyAfterZoom"
        categoryFilter={{
          enabled: false,
          multiSelect: true,
          zoomOnSelect: true,
        }}
        legend={{
          hideNonSelectableCategories: true,
        }}
        objectWithoutCategorySelectable={false}
        fitTo="widthAndHeight"
        objectTooltip={{
          confirmSelectionOnMobile: false,
        }}
        priceFormatter={(price) => currency_details.symbol + price}
        loading={`<img src=${loaderSrc.src} alt='Loader'>`}
        onObjectSelected={(selectedSeat) => {
          updateSelectedSeat(selectedSeat);
        }}
        onObjectDeselected={(selectedSeat) => {
          removeSeat(selectedSeat);
        }}
      />
    </div>
  );
}
