import '@testing-library/jest-dom';
import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/svelte';

import todos from './+page.svelte';

describe("test", () => {
    it('should render with Please search for a game.', async () => {
        render(todos, { searchResults: [] });
        expect(screen.queryByText('Please search for a game.')).toBeInTheDocument();
    });

    it('should render with No results found. Please search for another game.', async () => {
        render(todos, { searchResults: [], searched: true });
        expect(screen.queryByText('No results found. Please search for another game.')).toBeInTheDocument();
    });

    it('should render a list of items', async () => {
        render(todos, { searchResults: [{gameName: "one"}, {gameName: "two"}] });
        const gamesFound = screen.getAllByTestId(/game-card-/);
        expect(gamesFound).toHaveLength(2);
    });
})