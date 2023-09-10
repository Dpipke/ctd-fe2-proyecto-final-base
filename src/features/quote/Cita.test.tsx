import { screen, waitFor } from '@testing-library/react'
import App from '../../App'
import { fakeCita } from '../../test/mocks/fakeCita'
import { server } from '../../test/mocks/server'
import { rest } from 'msw'
import { render } from '../../test-utils'
import Cita from './Cita'

describe("Cita", () => {
    describe("Cuando renderizamos el componente", () => {
        beforeEach(() => {
            render(<Cita />);
        });
        it("No debería traer ninguna cita", async () => {
            expect(screen.getByText(/No se encontro ninguna cita/i)).toBeInTheDocument();
        });
    });
})