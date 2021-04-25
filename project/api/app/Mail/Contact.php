<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Contact extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $from;
    public $msg;

    /**
     * Create a new message instance.
     *
     * @param $name
     * @param $from
     * @param $message
     */
    public function __construct($name, $from, $message)
    {
        $this->name = $name;
        $this->msg = $message;
        $this->from = ['email' => $from];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): Contact
    {
        return $this->from($this->from)->view('mail.contact');
    }
}
