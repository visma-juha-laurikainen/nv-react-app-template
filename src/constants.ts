let apiUrl = process.env.API_URL || "requesthandler.aspx";

if (process.env.NODE_ENV === "test") {
  apiUrl = "http://example.com";
}

export const API_URL = apiUrl;
