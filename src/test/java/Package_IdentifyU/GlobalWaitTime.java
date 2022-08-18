package Package_IdentifyU;

import java.time.Duration;

public class GlobalWaitTime
{

    public GlobalWaitTime ()
    {

    }

    // Standard wait timeout
    public static Duration getIntWaitTime ()
    {

        return Duration.ofMillis(30);

    }

    // Short wait used for unexpected alerts
    public static Duration getShortWaitTime ()
    {

        return Duration.ofMillis(10);

    }

    // Extra long wait timeout used in some searches
    public static Duration getLongWaitTime ()
    {

        return Duration.ofMillis(60);

    }

}