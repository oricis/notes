# Inverters notes

## TensiteOne Settings for LiFePo batteries

Settings for **16s LiFePo battery bank without BMS connection** and
only solar inputs:

    01  Sbu (output priority source: solar, battery and net)
    02  50A (max current of load for batteries)
    05  USE (battery type)
    12  46
    16  OSO (only solar input to charge batteries)
    19  EEP (set screen in the last view)
    20  Off (inverter screen)
    24  46 (under voltage warn alarm)
    26  56.4 (load voltage)
    27  54.2 (float voltage)
    29  44 (low voltage disconnection)
    30  Ed5 (equalization disabled)
    37  OFF (BMS without communication)
    43  LBU (solar input first for loads)
    44  Etd (grid output disabled)
    60  L2f (double output disabled)


***

[Go to index](../../README.md)
