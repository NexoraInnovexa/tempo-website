
import ContentPage from "@/components/ContentPage";

export default function Privacy() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Privacy policy"
      description="Tempo is built around private communication. This policy explains our approach to personal information, end-to-end encryption, temporary message storage, automatic destruction and your responsibilities when using the platform."
    >
      <div className="prose-panel">
        <p>
          <strong>Last updated: November 23, 2026</strong>
        </p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Tempo. Tempo is a privacy-focused messaging platform
          designed to facilitate private, temporary communications. Its
          features include end-to-end encrypted messaging, self-destructing
          conversations, view-once file sharing, screenshot protection
          and screen-recording protection.
        </p>
        <p>
          Privacy is fundamental to the design of Tempo. We do not operate
          the messaging application as a platform for collecting personal
          user information, building conventional user profiles or
          maintaining permanent archives of private conversations.
        </p>
        <p>
          By downloading, activating or using Tempo, you acknowledge
          that you have read and understood this Privacy Policy. If you
          do not agree with it, you should discontinue using the
          application.
        </p>

        <h2>2. Tempo's Privacy Principles</h2>
        <p>Tempo is built around the following principles:</p>
        <ul>
          <li>
            <strong>No personal user data collection:</strong> Tempo
            does not collect or maintain personal user profiles or a
            database of users' personal information through its
            messaging application.
          </li>
          <li>
            <strong>End-to-end encryption:</strong> Messages are
            encrypted so that only the communicating users with the
            appropriate cryptographic keys can read their contents.
          </li>
          <li>
            <strong>Encrypted temporary storage:</strong> Messages may
            be temporarily stored in encrypted form to facilitate
            communication. They are not maintained as a permanent
            conversation archive.
          </li>
          <li>
            <strong>Automatic destruction:</strong> Conversations and
            their associated messages are destroyed when their
            configured conversation timer expires.
          </li>
          <li>
            <strong>User-controlled destruction:</strong> Users can
            independently choose to self-destruct a conversation
            without waiting for its timer to expire.
          </li>
          <li>
            <strong>Privacy protection:</strong> Tempo provides
            protections against screenshots and screen recording
            during active conversations.
          </li>
          <li>
            <strong>No commercial exploitation:</strong> Tempo does
            not sell, rent or trade users' personal information. Tempo does not collect any user information.
          </li>
        </ul>

        <h2>3. No Collection of Personal User Information</h2>
        <p>
          Tempo does not collect personal user information or maintain
          conventional personal user profiles through its messaging
          application. We do not operate the platform as a personal
          information harvesting, profiling or advertising service.
        </p>
        <p>
          We do not sell, rent, trade or commercially exploit users'
          personal information.
        </p>
        <p>
          If you voluntarily contact our support team by email or
          another external communication channel, information you
          provide may be received and used to respond to your enquiry.
          Such correspondence is separate from your private
          conversations within Tempo.
        </p>

        <h2>4. End-to-End Encryption</h2>
        <p>
          Tempo uses end-to-end encryption to protect messages
          exchanged between communicating users.
        </p>
        <p>
          Messages are encrypted before transmission and remain
          encrypted while temporarily stored in Tempo's database.
          The message contents are protected by cryptographic keys
          controlled by the communicating users.
        </p>
        <p>
          Even Tempo's operators cannot read or inspect the readable
          contents of encrypted messages directly from the database.
          Access to the database does not, by itself, provide the
          ability to decrypt users' conversations.
        </p>
        <p>
          End-to-end encryption is designed to ensure that message
          contents are accessible only to the communicating parties
          who possess the appropriate cryptographic keys.
        </p>
        <p>
          Encryption protects the contents of communications, but
          it does not prevent a recipient from disclosing information
          they have legitimately viewed. Users should communicate
          only with people they trust and exercise care when sharing
          sensitive information.
        </p>

        <h2>5. Temporary Message Storage and Automatic Destruction</h2>
        <p>
          Tempo does not maintain a permanent archive of users'
          conversations. Messages are temporarily stored in encrypted
          form on infrastructure used to facilitate communication
          between users.
        </p>
        <p>
          Every conversation is subject to its configured conversation
          timer. When the timer reaches its expiration point, the
          conversation and its associated messages are automatically
          destroyed across the Tempo system in accordance with the
          application's deletion functionality.
        </p>
        <p>
          Users can also independently choose to self-destruct a chat
          without waiting for the conversation timer to expire.
          When a chat is self-destructed, its associated conversation
          content is destroyed in accordance with the application's
          deletion functionality.
        </p>
        <p>
          Destruction is intended to remove the affected conversation
          and its associated messages from the system, rather than
          merely hiding them from the user's conversation list.
        </p>
        <p>
          Once a conversation has been destroyed, Tempo does not
          guarantee a method of recovery, restoration or retrieval.
        </p>
        <p>
          Temporary encrypted storage is necessary to facilitate
          communication and does not constitute permanent
          conversation archiving.
        </p>

        <h2>6. No Guarantee of Conversation Recovery</h2>
        <p>
          Users expressly acknowledge that conversations and shared
          materials on Tempo are temporary in nature.
        </p>
        <p>
          Conversations may be destroyed automatically when their
          configured timer expires or manually when a user chooses
          to self-destruct a chat.
        </p>
        <p>
          To the fullest extent permitted by applicable law, Tempo
          shall not be responsible for conversations, messages,
          attachments, documents, images, videos or other content
          that is destroyed, deleted, expired, lost, inaccessible
          or otherwise unavailable.
        </p>
        <p>
          We do not guarantee that destroyed conversations can be
          recovered, reconstructed, retrieved or supplied at a
          later date.
        </p>
        <p>
          Users must not rely on Tempo to maintain a record of
          communications for future reference, legal proceedings,
          investigations, business transactions, disputes,
          regulatory compliance or evidential purposes.
        </p>

        <h2>7. Do Not Use Tempo for Evidence Preservation</h2>
        <p>
          If you need a permanent conversation trail, an official
          communication record, proof of an agreement, transaction
          records or messages that may be required as evidence,
          you should use a platform specifically designed to retain
          and preserve such records.
        </p>
        <p>
          Tempo is not designed to preserve conversations for court
          proceedings, law enforcement investigations, employment
          matters, contractual disputes or other situations requiring
          a reliable communication history.
        </p>
        <p>
          By choosing to use Tempo, you accept the risk that
          communications may no longer be available when you need them.
        </p>

        <h2>8. User Responsibility</h2>
        <p>
          You are solely responsible for your use of Tempo and for
          the communications, information, files and materials you
          send, receive, access or share through the platform.
        </p>
        <p>You agree that you will:</p>
        <ul>
          <li>Use Tempo only for lawful purposes.</li>
          <li>
            Respect the rights, privacy and consent of other users.
          </li>
          <li>
            Avoid sharing content that violates applicable laws or
            the rights of third parties.
          </li>
          <li>
            Avoid using Tempo to facilitate fraud, harassment,
            threats, exploitation or other unlawful activities.
          </li>
          <li>
            Understand the temporary nature of messages and shared
            files before sending them.
          </li>
          <li>
            Use an appropriate recordkeeping platform where
            permanent records are necessary.
          </li>
          <li>
            Protect your device and any credentials or activation
            information used to access the application.
          </li>
        </ul>
        <p>
          You assume responsibility for the consequences of your
          decision to communicate through a temporary messaging
          platform.
        </p>

        <h2>9. Prohibited and Unlawful Activities</h2>
        <p>
          Tempo must not be used to plan, facilitate, promote,
          coordinate, conceal or participate in any illegal activity.
        </p>
        <p>Prohibited activities include, but are not limited to:</p>
        <ul>
          <li>Fraud, scams, impersonation and financial deception.</li>
          <li>Threats, blackmail, extortion and harassment.</li>
          <li>
            Distribution of illegal, exploitative or non-consensual
            content.
          </li>
          <li>
            Human trafficking, exploitation and other criminal
            activities.
          </li>
          <li>
            Unauthorized access, cybercrime and malicious activity.
          </li>
          <li>
            Any activity that violates applicable local, national
            or international laws.
          </li>
        </ul>
        <p>
          The private and temporary nature of Tempo does not provide
          immunity from the law. Users remain individually responsible
          for their actions and communications.
        </p>
        <p>
          Tempo reserves the right to restrict, suspend or terminate
          access where there is a legitimate basis to do so, subject
          to applicable law and our applicable terms.
        </p>

        <h2>10. Responsibility for User Communications</h2>
        <p>
          Tempo provides a communication platform. Users, and not
          Tempo, are responsible for the content and purpose of
          their individual communications.
        </p>
        <p>
          To the extent permitted by applicable law, Tempo shall
          not be responsible for the statements, representations,
          promises, agreements, transactions, threats, instructions
          or other communications made by users.
        </p>
        <p>
          Tempo does not endorse or guarantee the accuracy,
          truthfulness, legality or reliability of user-generated
          communications.
        </p>
        <p>
          Any agreement, arrangement, transaction or relationship
          entered into between users is their own responsibility.
          Users should independently verify important information
          and obtain appropriate professional advice where necessary.
        </p>

        <h2>11. Screenshot, Screen Recording and External Camera Protection</h2>
        <p>
          Tempo incorporates privacy protection mechanisms designed
          to prevent screenshots and screen recording during active
          conversations within the application.
        </p>
        <p>
          These protections are intended to prevent the use of
          ordinary device screenshot and screen recording functions
          to capture conversations while users are communicating
          through Tempo.
        </p>
        <p>
          However, Tempo cannot prevent someone from using a separate
          physical device, such as another mobile phone, tablet or
          camera, to photograph or record content displayed on
          their screen.
        </p>
        <p>
          Screenshot and screen-recording protection does not
          eliminate every possible method of capturing, reproducing
          or disclosing information.
        </p>
        <p>
          Users should exercise caution and avoid sharing information
          they cannot afford to have disclosed.
        </p>

        <h2>12. Third-Party Infrastructure and Services</h2>
        <p>
          Tempo may depend on third-party technical infrastructure
          or service providers to deliver, secure and maintain
          application functionality.
        </p>
        <p>
          Such providers may process limited technical information
          as necessary to provide their services. This does not
          mean that Tempo maintains a personal database of users
          or a permanent archive of their conversations.
        </p>
        <p>
          Messages remain encrypted while temporarily stored in
          Tempo's database. Tempo's operators cannot read their
          contents directly from the database.
        </p>
        <p>
          Independent third-party services may operate under their
          own privacy policies and contractual obligations. Tempo
          does not control the independent privacy practices of
          services outside its control.
        </p>

        <h2>13. Security</h2>
        <p>
          Tempo uses end-to-end encryption, encrypted temporary
          message storage and privacy-focused application
          functionality to help protect communications.
        </p>
        <p>
          Nevertheless, no application, device, internet connection,
          network or electronic transmission can be guaranteed to
          be completely secure.
        </p>
        <p>
          Tempo cannot guarantee absolute protection against every
          possible security incident, compromised device, external
          attack, unauthorized access or disclosure resulting
          from circumstances beyond its reasonable control.
        </p>
        <p>
          Users are responsible for securing their devices and
          protecting their access to the application.
        </p>

        <h2>14. Children's Privacy</h2>
        <p>
          Tempo must not be used to exploit, endanger or harm children
          in any way. Users must comply with applicable age-related
          and child-protection laws.
        </p>
        <p>
          Any use of Tempo involving the exploitation, abuse or
          endangerment of a child is strictly prohibited.
        </p>

        <h2>15. Legal Disclosures and Compliance</h2>
        <p>
          Nothing in this Privacy Policy is intended to prevent
          compliance with applicable laws or valid legal obligations.
        </p>
        <p>
          Where required by a valid legal obligation, Tempo may
          disclose information that is actually within its
          possession or control.
        </p>
        <p>
          Because message contents are end-to-end encrypted,
          Tempo's operators cannot read their contents directly
          from the database. Tempo cannot provide readable message
          contents that it cannot decrypt or conversations that
          have already been destroyed and are no longer available.
        </p>
        <p>
          The private and temporary nature of Tempo does not exempt
          users from applicable laws or legal responsibility for
          their actions.
        </p>

        <h2>16. Limitation of Responsibility</h2>
        <p>
          To the fullest extent permitted by applicable law, Tempo
          and its operators shall not be liable for:
        </p>
        <ul>
          <li>
            The destruction, expiration, deletion or unavailability
            of conversations or shared content.
          </li>
          <li>
            The automatic destruction of conversations when their
            configured timer expires.
          </li>
          <li>
            The destruction of conversations when a user chooses
            to self-destruct a chat.
          </li>
          <li>
            A user's inability to retrieve or produce a conversation
            as evidence or documentation.
          </li>
          <li>
            Losses arising from a user's reliance on Tempo as a
            permanent recordkeeping or evidence-preservation platform.
          </li>
          <li>
            The content, accuracy, legality or consequences of
            communications between users.
          </li>
          <li>
            Transactions, agreements, disputes or relationships
            between users.
          </li>
          <li>
            Content photographed, recorded or otherwise captured
            using external devices outside Tempo's screenshot and
            screen-recording protection mechanisms.
          </li>
          <li>
            Unauthorized disclosure or access resulting from
            circumstances beyond our reasonable control.
          </li>
          <li>
            Losses resulting from a user's unlawful, unauthorized
            or improper use of the platform.
          </li>
        </ul>
        <p>
          Users acknowledge that Tempo is provided as a private,
          temporary messaging service and is not a permanent
          communication, backup or evidence-preservation service.
        </p>
        <p>
          Nothing in this policy excludes or limits any liability,
          right or obligation that cannot lawfully be excluded
          or limited under applicable law.
        </p>

        <h2>17. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to
          reflect changes in Tempo's functionality, operational
          practices, legal requirements or security measures.
        </p>
        <p>
          Updated versions will be published on this website with
          a revised update date. Continued use of Tempo after an
          updated policy becomes effective will be subject to
          the revised policy, to the extent permitted by applicable law.
        </p>

        <h2>18. Contact Us</h2>
        <p>
          If you have questions or concerns relating to this
          Privacy Policy, contact us:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:tempo@nexora.com.ng">
            tempo@nexora.com.ng
          </a>
        </p>
        <p>
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/2347055507960"
            target="_blank"
            rel="noopener noreferrer"
          >
            +234 705 550 7960
          </a>
        </p>

        <p>
          <strong>Tempo</strong>
          <br />
          Private conversations. Temporary by design.
        </p>
      </div>
    </ContentPage>
  );
}
