{
  "name": "billing",
  "comment": "Billing extension",
  "loadOrder": 30,
  "databaseScripts": [
    "public/tables/rptdef.sql",
    "xm/javascript/billing.sql",
    "xm/javascript/invoice.sql",
    "xm/javascript/return.sql",
    "xm/javascript/receivable.sql",
    "xm/javascript/sales_category.sql",
    "xt/functions/ar_balance.sql",
    "xt/functions/ar_tax_total.sql",
    "xt/functions/cashrcpt.sql",
    "xt/views/cashrcptitem_pending.sql",
    "xt/views/receivable_invoice_return.sql",
    "xt/views/aropeninfo.sql",
    "xt/views/receivable_applications.sql"
  ]
}
