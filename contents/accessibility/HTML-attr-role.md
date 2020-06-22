# HTML attr: role

*Content from: https://www.w3.org/WAI/PF/HTML/wiki/RoleAttribute*

> Use cases for a role attribute for HTML5, include:

> accessibility,
> device adaptation,
> server-side processing, and
> complex data description.*

***

## Items from the XHTML Role Module

<p>The following values are defined for use in the role attribute as specified in the XHTML Role Attribute Module:
</p>

<ul>
    <li> <code>banner</code>
        <ul>
            <li> banner contains the prime heading or internal title of a page.</li>
        </ul>
    </li>
    <li> <code>complementary</code>
        <ul>
            <li> secondary indicates that the section supports but is separable from the main content of resource.</li>
        </ul>
    </li>
    <li> <code>contentinfo</code>
        <ul>
            <li> contentinfo has meta information about the content on the page or the page as a whole.</li>
        </ul>
    </li>
    <li> <code>definition</code>
        <ul>
            <li> definition indicates the definition of a term or concept.</li>
        </ul>
    </li>
    <li> <code>main</code>
        <ul>
            <li> main acts as the main content of the document.</li>
        </ul>
    </li>
    <li> <code>navigation</code>
        <ul>
            <li> navigation indicates a collection of items suitable for navigating the document or related documents.
            </li>
        </ul>
    </li>
    <li> <code>note</code>
        <ul>
            <li> note indicates the content is parenthetic or ancillary to the main content of the resource.</li>
        </ul>
    </li>
    <li> <code>search</code>
        <ul>
            <li> search indicates that the section provides a search facility.</li>
        </ul>
    </li>
</ul>

***

## ARIA 1.0 Pre-Defined Roles

<ul>
    <li> <code>alert</code>
        <ul>
            <li> A message with an alert or error information.</li>
        </ul>
    </li>
    <li> <code>alertdialog</code>
        <ul>
            <li> A separate window with an alert or error information.</li>
        </ul>
    </li>
    <li> <code>application</code>
        <ul>
            <li> A software unit executing a set of tasks for its users.</li>
        </ul>
    </li>
    <li> <code>button</code>
        <ul>
            <li> Allows for user-triggered actions.</li>
        </ul>
    </li>
    <li> <code>checkbox</code>
        <ul>
            <li> A control that has three possible values, (true, false, mixed).</li>
        </ul>
    </li>
    <li> <code>columnheader</code>
        <ul>
            <li> A table cell containing header information for a column.</li>
        </ul>
    </li>
    <li> <code>combobox</code>
        <ul>
            <li> Combobox is a presentation of a select, where users can type to locate a selected item.</li>
        </ul>
    </li>
    <li> <code>description</code>
        <ul>
            <li> Descriptive content for a page element which references this element via describedby.</li>
        </ul>
    </li>
    <li> <code>dialog</code>
        <ul>
            <li> A dialog is a small application window that sits above the application and is designed to interrupt the
                current processing of an application in order to prompt the user to enter information or require a
                response.</li>
        </ul>
    </li>
    <li> <code>directory</code>
        <ul>
            <li> A list of references to members of a single group.</li>
        </ul>
    </li>
    <li> <code>document</code>
        <ul>
            <li> Content that contains related information, such as a book.</li>
        </ul>
    </li>
    <li> <code>grid</code>
        <ul>
            <li> A grid contains cells of tabular data arranged in rows and columns (e.g., a table).</li>
        </ul>
    </li>
    <li> <code>gridcell</code>
        <ul>
            <li> A gridcell is a table cell in a grid. Gridcells may be active, editable, and selectable. Cells may have
                relationships such as controls to address the application of functional relationships.</li>
        </ul>
    </li>
    <li> <code>group</code>
        <ul>
            <li> A group is a section of user interface objects which would not be included in a page summary or table
                of contents by an assistive technology. See region for sections of user interface objects that should be
                included in a page summary or table of contents.</li>
        </ul>
    </li>
    <li> <code>heading</code>
        <ul>
            <li> A heading for a section of the page.</li>
        </ul>
    </li>
    <li> <code>img</code>
        <ul>
            <li> An img is a container for a collection elements that form an image.</li>
        </ul>
    </li>
    <li> <code>link</code>
        <ul>
            <li> Interactive reference to a resource (note, that in XHTML 2.0 any element can have an href attribute and
                thus be a link)</li>
        </ul>
    </li>
    <li> <code>list</code>
        <ul>
            <li> Group of non-interactive list items. Lists contain children whose role is listitem.</li>
        </ul>
    </li>
    <li> <code>listbox</code>
        <ul>
            <li> A list box is a widget that allows the user to select one or more items from a list. Items within the
                list are static and may contain images. List boxes contain children whose role is option.</li>
        </ul>
    </li>
    <li> <code>listitem</code>
        <ul>
            <li> A single item in a list.</li>
        </ul>
    </li>
    <li> <code>log</code>
        <ul>
            <li> A region where new information is added and old information may disappear such as chat logs, messaging,
                game log or an error log. In contrast to other regions, in this role there is a relationship between the
                arrival of new items in the log and the reading order. The log contains a meaningful sequence and new
                information is added only to the end of the log, not at arbitrary points.</li>
        </ul>
    </li>
    <li> <code>marquee</code>
        <ul>
            <li> A marquee is used to scroll text across the page.</li>
        </ul>
    </li>
    <li> <code>menu</code>
        <ul>
            <li> Offers a list of choices to the user.</li>
        </ul>
    </li>
    <li> <code>menubar</code>
        <ul>
            <li> A menubar is a container of menu items. Each menu item may activate a new sub-menu. Navigation behavior
                should be similar to the typical menu bar graphical user interface.</li>
        </ul>
    </li>
    <li> <code>menuitem</code>
        <ul>
            <li> A link in a menu. This is an option in a group of choices contained in a menu.</li>
        </ul>
    </li>
    <li> <code>menuitemcheckbox</code>
        <ul>
            <li> Defines a menuitem which is checkable (tri-state).</li>
        </ul>
    </li>
    <li> <code>menuitemradio</code>
        <ul>
            <li> Indicates a menu item which is part of a group of menuitemradio roles.</li>
        </ul>
    </li>
    <li> <code>option</code>
        <ul>
            <li> A selectable item in a list represented by a select.</li>
        </ul>
    </li>
    <li> <code>presentation</code>
        <ul>
            <li> An element whose role is presentational does not need to be mapped to the accessibility API.</li>
        </ul>
    </li>
    <li> <code>progressbar</code>
        <ul>
            <li> Used by applications for tasks that take a long time to execute, to show the execution progress.</li>
        </ul>
    </li>
    <li> <code>radio</code>
        <ul>
            <li> A radio is an option in single-select list. Only one radio control in a radiogroup can be selected at
                the same time.</li>
        </ul>
    </li>
    <li> <code>radiogroup</code>
        <ul>
            <li> A group of radio controls.</li>
        </ul>
    </li>
    <li> <code>region</code>
        <ul>
            <li> Region is a large perceivable section on the web page.</li>
        </ul>
    </li>
    <li> <code>row</code>
        <ul>
            <li> A row of table cells.</li>
        </ul>
    </li>
    <li> <code>rowheader</code>
        <ul>
            <li> A table cell containing header information for a row.</li>
        </ul>
    </li>
    <li> <code>separator</code>
        <ul>
            <li> A line or bar that separates and distinguishes sections of content.</li>
        </ul>
    </li>
    <li> <code>slider</code>
        <ul>
            <li> A user input where the user selects an input in a given range. This form of range expects an analog
                keyboard interface.</li>
        </ul>
    </li>
    <li> <code>spinbutton</code>
        <ul>
            <li> A form of Range that expects a user selecting from discrete choices.</li>
        </ul>
    </li>
    <li> <code>status</code>
        <ul>
            <li> This is a container for process advisory information to give feedback to the user.</li>
        </ul>
    </li>
    <li> <code>tab</code>
        <ul>
            <li> A header for a tabpanel.</li>
        </ul>
    </li>
    <li> <code>tablist</code>
        <ul>
            <li> A list of tabs, which are references to tabpanels.</li>
        </ul>
    </li>
    <li> <code>tabpanel</code>
        <ul>
            <li> Tabpanel is a container for the resources associated with a tab.</li>
        </ul>
    </li>
    <li> <code>textbox</code>
        <ul>
            <li> Inputs that allow free-form text as their value.</li>
        </ul>
    </li>
    <li> <code>timer</code>
        <ul>
            <li> A numerical counter which indicates an amount of elapsed time from a start point, or the time remaining
                until an end point.</li>
        </ul>
    </li>
    <li> <code>toolbar</code>
        <ul>
            <li> A toolbar is a collection of commonly used functions represented in compact visual form.</li>
        </ul>
    </li>
    <li> <code>tooltip</code>
        <ul>
            <li> A popup that displays a description for an element when a user passes over or rests on that element.
                Supplement to the normal tooltip processing of the user agent.</li>
        </ul>
    </li>
    <li> <code>tree</code>
        <ul>
            <li> A form of a list having groups inside groups, where sub trees can be collapsed and expanded.</li>
        </ul>
    </li>
    <li> <code>treegrid</code>
        <ul>
            <li> A grid whose rows can be expanded and collapsed in the same manner as for a tree.</li>
        </ul>
    </li>
    <li> <code>treeitem</code>
        <ul>
            <li> An option item of a tree. This is an element within a tree that may be expanded or collapsed.</li>
        </ul>
    </li>
</ul>


***

[Go to index](../../README.md)
