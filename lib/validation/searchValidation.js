import * as yup from "yup";

export const oneWaySearchValidation = yup.object().shape({
  origin: yup
    .object()
    .shape({
      name: yup.string(),
      iata: yup.string(),
      continent: yup.string(),
      type: yup.string(),
    })
    .typeError("Origin is required")
    .required("Origin is required"),
  destination: yup
    .object()
    .shape({
      name: yup.string(),
      iata: yup.string(),
      continent: yup.string(),
      type: yup.string(),
    })
    .typeError("Destination is required")
    .required("Destination is required."),
  departureDate: yup.date().typeError("Departure date is required"),
  class: yup.string(),
  preferAirline: yup
    .object()
    .shape({
      code: yup.string(),
      name: yup.string(),
      image: yup.string(),
    })
    .nullable(),
});

export const roundSearchValidation = yup.object().shape({
  origin: yup
    .object()
    .shape({
      name: yup.string(),
      iata: yup.string(),
      continent: yup.string(),
      type: yup.string(),
    })
    .required("Origin is required"),
  destination: yup
    .object()
    .shape({
      name: yup.string(),
      iata: yup.string(),
      continent: yup.string(),
      type: yup.string(),
    })
    .required("Destination is required."),
  departureDate: yup.date().required("Departure date is required"),
  returnDate: yup.date().required("Return date is required."),
  class: yup.string(),
  preferAirline: yup
    .object()
    .shape({
      code: yup.string(),
      name: yup.string(),
      image: yup.string(),
    })
    .nullable(),
});
