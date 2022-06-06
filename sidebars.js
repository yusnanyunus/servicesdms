/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */


  tutorialSidebar: [
    {
      type: "doc",
      id: "systemoverview",
      label: "SYSTEM OVERVIEW",
    },

    {
      type: "doc",
      id: "basicoperation",
      label: "BASIC OPERATION",
    },

    {
      type: "doc",
      id: "general",
      label: "GENERAL",
    },

    {
      type: "category",
      label: "GENERAL REPAIR",
      items : [
        "general-repair/create-booking/create-booking",
        "general-repair/security-gate/security-gate",
        "general-repair/reception/reception",
        "general-repair/create-wo/create-wo",
        "general-repair/wac/wac",
        "general-repair/print-wo/print-wo",
        "general-repair/job-distribution/job-distribution",
        "general-repair/production/production",
        //"general-repair/service-part-supply/service-part-supply",
        "general-repair/inspection/inspection",
        "general-repair/doc-checking/doc-checking",
        "general-repair/invoicing/invoicing",
        "general-repair/gate-pass/gate-pass",
        "general-repair/cash-receipt/cash-receipt",
      ]
    },

    {
      type: "category",
      label: "PURCHASE PART",
      items : [
        "purchase-part/create-wo/create-wo",
        "purchase-part/print-wo/print-wo",
        //"purchase-part/service-part-supply/service-part-supply",,
        "purchase-part/doc-checking/doc-checking",
        "purchase-part/invoicing/invoicing",
        "purchase-part/gate-pass/gate-pass",
        "purchase-part/cash-receipt/cash-receipt",
      ]
    },

    {
      type: "category",
      label: "BODY PAINTING",
      items : [
        "body-painting/security-gate/security-gate",
        "body-painting/reception/reception",
        "body-painting/create-wo/create-wo",
        "body-painting/wac/wac",
        "body-painting/print-wo/print-wo",
        "body-painting/job-distribution/job-distribution",
        "body-painting/production/production",
        //"body-painting/service-part-supply/service-part-supply",
        "body-painting/inspection/inspection",
        "body-painting/doc-checking/doc-checking",
        "body-painting/invoicing/invoicing",
        "body-painting/gate-pass/gate-pass",
        "body-painting/cash-receipt/cash-receipt",
      ]
    },

    //{
    //  type: "category",
    //  label: "PART OPERATIONAL GUIDE",
    //  items: [
    //    "partman-og/service-part-supply/service-part-supply",
    //  ]
    //},

    {
      type: "doc",
      id: "partmanog",
      label: "PART OPERATIONAL GUIDE",
    },

  ],


};

module.exports = sidebars;
