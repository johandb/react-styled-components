import React from "react";

export interface DataGridColumn {
  /**
   * De exacte sleutelnaam uit het data-object.
   * Dit koppelt de kolom aan de juiste waarde in je rij (bijv. 'id', 'customer', of 'price').
   */
  field: string;

  /**
   * De tekst die bovenin de tabelkop (de header) moet komen te staan.
   * Dit is wat de gebruiker daadwerkelijk ziet (bijv. 'Bestel ID', 'Klant Naam').
   */
  headerName: string;

  /**
   * Een optionele functie om de celinhoud handmatig vorm te geven.
   * Je krijgt het volledige rij-object (`row`) mee als argument.
   * Moet geldige JSX (HTML in React) of een string teruggeven.
   */
  renderCell?: (row: any) => React.ReactNode;
}
