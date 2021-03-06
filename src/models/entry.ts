import { OutputElementStyle } from './styles';

/**
 * Basic entry interface
 */
export interface Entry {
    /**
     * Unique Id for the entry
     */
    id: number;

    /**
     * Parent entry Id, or -1 if the entry does not have a parent
     */
    parentId: number;

    /**
     * Array of string that represant the content of each column
     */
    labels: string[];

    /**
     * Style key used to search for a The style map can be obtained by using the style endpoint.
     */
    style?: OutputElementStyle;
}

/**
 * Entry header
 */
export interface EntryHeader {
    /**
     * Displayed name
     */
    name: string
}

/**
 * Entry model that will be returned by the server
 */
export interface EntryModel<T extends Entry, U extends EntryHeader> {
    /**
     * Array of entry header
     */
    headers: U[];

    /**
     * Array of entry
     */
    entries: T[];
}
