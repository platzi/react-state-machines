import { createMachine, assign } from "xstate";

const bookingMachine = createMachine({
  id: "buy plane tickets",
  initial: "initial",
  context: {
    passengers: [],
    selectedCountry: '',
  },
  states: {
    initial: {
      on: {
        START: {
          target: "search",
        },
      },
    },
    search: {
      on: {
        CONTINUE: {
          target: 'passengers',
          actions: assign({
            selectedCountry: (context, event) => event.selectedCountry
          })
        },
        CANCEL: "initial",
      },
    },
    tickets: {
      on: {
        FINISH: "initial",
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: "initial",
        ADD: {
          target: 'passengers',
          actions: assign(
            (context, event) => context.passengers.push(event.newPassenger)
          )
        }
      },
    },
  },
},
{
  actions: {
    imprimirInicio: () => console.log('Imprimir inicio'),
    imprimirEntrada: () => console.log('Imprimir entrada a search'),
    imprimirSalida: () => console.log('Imprimir salida del search'),
  },
}
);

export default bookingMachine;