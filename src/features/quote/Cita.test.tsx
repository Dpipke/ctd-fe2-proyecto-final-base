import { screen, waitFor } from '@testing-library/react'
import App from '../../App'
import { fakeCita } from '../../test/mocks/fakeCita'
import { server } from '../../test/mocks/server'
import { rest } from 'msw'
import userEvent from "@testing-library/user-event";
import Cita from './Cita'
import { renderWithProviders } from '../../test/renderWithProviders'
import { handlers } from '../../test/mocks/handlers';


describe("Cita component", () => {
    beforeEach(() => {
        renderWithProviders(<Cita />);
    });
    describe("When the component is loaded by default", () => {
        it("Should render correctly", async () => {
            renderWithProviders(<Cita />);
        });
        it("Should display a 'none quote found' message", async () => {
            expect(screen.getByText(/No se encontro ninguna cita/i)).toBeInTheDocument();
        });
    });
    describe('When the user does not complete the input', () => {
        it("Should display a loading message while data is being fetched", async () => {

            const button = screen.getByRole("button", { name: /Obtener cita aleatoria/i });
            userEvent.click(button);

            await waitFor(() => {
                expect(screen.getByText(/CARGANDO/i)).toBeInTheDocument();
            });
        });
        it("Should display a random quote when te user clicks the button", async () => {
            const button = screen.getByRole("button", { name: /Obtener cita aleatoria/i });
            userEvent.click(button);
            await waitFor(() => {
                expect(screen.getByText(/CARGANDO/i)).toBeInTheDocument();
            });
        });
    });
    describe("When te user enters a character name in the input before pressing the button", () => {
        it("Should display a quote if the entered character is valid", async () => {
            const input = screen.getByRole("textbox", { name: /Author Cita/i });
            const button = await screen.findByRole("button", { name: /Obtener Cita/i });
        
            userEvent.clear(input);
            userEvent.click(input);
            userEvent.type(input, "Lisa Simpson");  
            userEvent.click(button);
        
            await waitFor(() => {
                expect(screen.getByText(fakeCita[0].quote)).toBeInTheDocument();
            });
        });
        
        // it("Should display an error message if the entered character is invalid", async () => {
        //     const input = screen.getByRole("textbox", { name: /Author Cita/i });
        //     const button = await screen.findByRole("button", { name: /Obtener Cita/i });
        
        //     userEvent.clear(input);
        //     userEvent.type(input, "Barbie");  
        //     userEvent.click(button);
        
        //     await waitFor(() => {
        //         expect(screen.getByText(/Por favor ingrese un nombre válido/i)).toBeInTheDocument();
        //     });
        // });
        it("Should display an error message if the entered character is invalid", async () => {
            const input = screen.getByRole("textbox", { name: /Author Cita/i });
            const button = await screen.findByRole("button", { name: /Obtener Cita/i });
        
            userEvent.clear(input);
            userEvent.type(input, "12345");  
            userEvent.click(button);
        
            await waitFor(() => {
                expect(screen.getByText(/Por favor ingrese un nombre válido/i)).toBeInTheDocument();
            });

        });
    });
    describe("When it has got a quote an the user clicks the clear button", () => {
        it("Should remove the shown quote", async () => {

            const input = screen.getByRole("textbox", { name: /Author Cita/i });
            const button = screen.getByRole("button", { name: /Borrar/i });

            userEvent.clear(input);
            userEvent.click(input);
            userEvent.click(button);

            await waitFor(() => {
                expect(input).toHaveValue('');
            });

        })
    })
})
