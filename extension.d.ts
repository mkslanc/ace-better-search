import type {Editor} from 'ace-code/src/editor';
import type {EditSession} from 'ace-code/src/edit_session';
import type {Ace} from 'ace-code';
import type {Search} from "ace-code/src/search";
import type {SearchBox} from "./src/searchbox";

declare global {
    const ace: {
        require: (module: string) => any;
    };
}

declare module "ace-code/src/search" {

    interface Search {
        $options: Ace.SearchOptions;

        $assembleRegExp(options: Partial<SearchOptions>, $disableFakeMultiline?: boolean): RegExp;
    }
}

declare module "ace-code/src/editor" {

    interface Editor {
        $search: Search;
        searchBox: SearchBox;
    }
}

declare module "ace-code/src/edit_session" {

    interface EditSession {
        searchTracker: SearchTracker;
    }
}



export interface InputEditor extends Editor {
    saveHistory?();

    session: InputEditorEditSession
}

export interface InputEditorEditSession extends EditSession {
    searchHistory?: string[];
    $modeId: string;
}

interface ExtendedSearchOptions extends Ace.SearchOptions {
    source: string;
    flags: string;
    regex?: RegExp;
    findAll: boolean;
    indexRange?: number[];
}

export type SearchResultCallbackArgs = {
    start?: Position,
    end?: Position,
    total: number,
    current: number,
    wrapped?: boolean,
    value?: string,
    startIndex?: number
} | {
    value: string,
    matches: number[],
    offset: number,
    start?: Position,
    end?: Position,
} | "waiting" | null;